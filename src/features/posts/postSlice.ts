// - - - - - - - - - - Libraries
// *** Redux Toolkit
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// *** Axios
import axios from "axios";

// - - - - - - - - - - Redux Logic

// *** Base Url
const baseUrl = "http://localhost:5050";

// *** InitialStateProps (Type)
type PostProps = {
  id?: string;
  title: string;
  description: string;
  userId?: string;
};
type InitialStateProps = {
  loading: boolean;
  posts: PostProps[];
  error: string;
};

/**
 * @desc Fetch all posts data from API
 * @method GET
 * @access public
 */
export const fetchPosts = createAsyncThunk<
  PostProps[],
  void,
  {rejectValue: string}
>("posts/fetchPosts", async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    return response.data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something Went Wrong!";
    return rejectWithValue(message);
  }
});

/**
 * @desc Add Post
 * @method POST
 * @access public
 */
export const addPost = createAsyncThunk<
  PostProps,
  PostProps,
  {rejectValue: string}
>("posts/addPost", async (post, {rejectWithValue}) => {
  try {
    const response = await axios.post(`${baseUrl}/posts`, post);
    return response.data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something Went Wrong!";
    return rejectWithValue(message);
  }
});

/**
 * @desc Delete Post
 * @method DELETE
 * @access public
 */
export const deletePost = createAsyncThunk<
  string,
  string,
  {rejectValue: string}
>("posts/deletePost", async (postId, {rejectWithValue}) => {
  try {
    await axios.delete(`${baseUrl}/posts/${postId}`);
    return postId;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something Went Wrong!";
    return rejectWithValue(message);
  }
});

/**
 * @desc Edit Post
 * @method PUT
 * @access public
 */
export const editPost = createAsyncThunk<
  PostProps,
  PostProps,
  {rejectValue: string}
>("posts/editPost", async (post, {rejectWithValue}) => {
  try {
    await axios.put(`${baseUrl}/posts/${post.id}`, post);
    return post;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something Went Wrong!";
    return rejectWithValue(message);
  }
});

// *** Initial State Structure
const initialState: InitialStateProps = {
  loading: false,
  posts: [],
  error: "",
};

// *** Post Slice
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // *** Fetch Posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload || "Something Went Wrong!";
    });
    // *** Add Post
    builder.addCase(addPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
      state.error = "";
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something Went Wrong!";
    });
    // *** Delete Post
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter(
        (post) => String(post.id) !== String(action.payload)
      );
      state.error = "";
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something Went Wrong!";
    });
    // *** Edit Post
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.map((post) =>
        String(post.id) === String(action.payload.id) ? action.payload : post
      );
      state.error = "";
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something Went Wrong!";
    });
  },
});

export default postSlice.reducer;
