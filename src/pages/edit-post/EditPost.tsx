// - - - - - - - - - - Libraries
import {useNavigate, useParams} from "react-router";
import {useForm, type SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import clsx from "clsx";

// - - - - - - - - - - Redux
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {editPost} from "../../features/posts/postSlice";

// - - - - - - - - - - Components
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import {useEffect} from "react";

// - - - - - - - - - - EditPost (Main Component)
const EditPost = () => {
  // *** React Router Hooks
  const params = useParams();
  const navigate = useNavigate();
  // *** Find Post To Update
  const {posts} = useAppSelector((state) => state.posts);
  const post = posts.find((post) => post.id === params.id);
  // *** Redux Custom Hooks
  const dispatch = useAppDispatch();
  // *** Zod Schema
  const schema = z.object({
    title: z
      .string()
      .min(3, {message: "Title must be at least 3 characters"})
      .max(10, {message: "Title must not exceed 10 characters"}),
    description: z
      .string()
      .min(10, {message: "Description must be at least 10 characters"})
      .max(250, {message: "Description must not exceed 250 characters"}),
  });
  type SchemaProps = z.infer<typeof schema>;
  // *** React Hook Form Logic
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<SchemaProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      title: post?.title,
      description: post?.description,
    },
  });
  const onSubmit: SubmitHandler<SchemaProps> = async (data) => {
    try {
      await dispatch(editPost({...post, ...data})).unwrap();
      navigate("/");
    } catch (error) {
      alert(`Failed to edit post ${error}`);
    }
  };
  // *** Handle Form Reset on Refresh
  useEffect(() => {
    if (post) {
      reset({
        title: post?.title,
        description: post?.description,
      });
    }
  }, [post, reset]);
  // *** Return JSX
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="add-post bg-green-50/75 sm:rounded-md"
    >
      <div className="post-form p-5 w-fit mx-auto flex flex-col items-center justify-center gap-5">
        <InputField
          name="title"
          label="TITLE"
          placeholder="Post Title"
          error={errors.title?.message}
          register={register}
          className="text-[#333]"
        />
        <div
          className={clsx(
            "input-field-textarea flex flex-col gap-1 w-full",
            errors.description
              ? "text-red-500"
              : "text-green-500 focus-within:text-green-600"
          )}
        >
          <label htmlFor="description" className="font-bold">
            DESCRIPTION
          </label>
          <textarea
            {...register("description")}
            id="description"
            placeholder="Post Content"
            className={clsx(
              "outline-0 border p-1.5 rounded-sm w-75 md:w-135 lg:w-180 resize-none h-37.5 text-[#333]",
              {
                "border-green-500 focus:border-green-600 placeholder:text-green-600/50":
                  !errors.description,
                "border-red-500 focus:border-red-600 placeholder:text-red-600/50":
                  errors.description,
              }
            )}
          ></textarea>
          {errors.description && (
            <span className="error">{errors.description?.message}</span>
          )}
        </div>
        <Button type="submit" className="mr-auto">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default EditPost;
