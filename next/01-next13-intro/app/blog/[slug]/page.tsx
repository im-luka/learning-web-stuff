export async function generateStaticParams() {
  return [
    {
      slug: "stream",
    },
  ];
}

export default function IndividualBlogPage() {
  return (
    <div>
      <h1>A Live Stream</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        odio sapiente voluptatibus vel molestias facilis, dolorum, quas beatae
        iste minus placeat dolore odit iure tenetur. Officiis amet ipsa maxime
        expedita voluptate animi. Aspernatur tenetur delectus dicta fugiat
        deserunt similique quis nemo maiores ducimus id provident hic earum
        assumenda, aliquam aut.
      </p>
    </div>
  );
}
