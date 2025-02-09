
type Props = {
  children: string
}


const PageHeading = ({ children }: Props) => {
  return (
    <h1 className="text text-5xl font-bold mt-10 underline text-center">
      {children} Page
    </h1>
  );
};
export default PageHeading;
