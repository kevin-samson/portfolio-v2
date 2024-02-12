export default function Page() {
  return (
    <section className="mx-7 flex ">
      <div className="flex fixed w-10 h-screen items-center justify-center">
        back
      </div>
      <div className="flex md:flex-row flex-col mt-20 ml-20">
        <div className="h-[50dvw] w-[50dvw] bg-accent"></div>
        <div className="flex flex-col j">
          <div>Title</div>
          <div>Completed</div>
        </div>
      </div>
    </section>
  );
}
