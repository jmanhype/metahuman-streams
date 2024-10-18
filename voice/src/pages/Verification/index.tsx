const Verification = () => {
  return (
    <main className="bg-[url('assets/morphline.png')] h-[85vh] grid items-center justify-items-center">
      <div className="grid place-content-start justify-items-center">
        <div className="shadow-[-450px_250px_280px_170px_rgba(7,43,170,0.7),-300px_250px_280px_150px_rgba(90,0,161,0.7)]" />
        <div className="shadow-[450px_100px_280px_170px_rgba(7,43,170,0.7),230px_100px_280px_150px_rgba(90,0,161,0.7)]" />
        <h1 className="text-6xl text-white font-bold mb-12"> Hold On. </h1>
        <h2 className="text-lg text-white/50 mb-12">
          Verify your account by clicking on the link sent to your email address
        </h2>
      </div>
    </main>
  );
};

export default Verification;
