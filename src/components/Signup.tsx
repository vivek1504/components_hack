
function LoginForm11() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('bg.jpg')"}}>
      <form className="w-96 bg-transparent border-2 border-white border-opacity-20 backdrop-filter[blur(9px)] text-white rounded-xl p-8">
        <h1 className="text-4xl text-center">Login</h1>
        <div className="relative w-full h-12 my-8">
          <input type="text" placeholder="Username" required className="w-full h-full bg-transparent border-none outline-none border-2 border-white border-opacity-20 rounded-full text-lg text-white px-5 py-2" />
          <i className='bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-lg'></i>
        </div>
        <div className="relative w-full h-12 my-8">
          <input type="password" placeholder="Password" required className="w-full h-full bg-transparent border-none outline-none border-2 border-white border-opacity-20 rounded-full text-lg text-white px-5 py-2" />
          <i className='bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-lg'></i>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <label><input type="checkbox" className="mr-1"/>Remember Me</label>
          <a href="#" className="text-white hover:underline">Forgot Password</a>
        </div>
        <button type="submit" className="w-full h-11 bg-white border-none outline-none rounded-full shadow-md cursor-pointer text-lg text-gray-800 font-semibold">Login</button>
        <div className="text-sm text-center my-5">
          <p>Dont have an account? <a href="#" className="text-white font-semibold hover:underline">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm11;