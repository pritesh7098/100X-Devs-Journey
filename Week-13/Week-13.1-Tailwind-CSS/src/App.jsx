// Tailwind class : Screen 1
// screen2: Screen 2
// screen3: Screen 3 is most difficult as it have to make an otp based screen and all.asked in interviews as well- react machine coding.

// take home assignment.

export default function App() {
  return (
    <div className="bg-blue-200 min-h-screen">
      <h1 className=" flex items-center justify-center pt-10 font-bold font-  text-blue-700 ">
        Webinar.gg
      </h1>
      <h2 className=" flex items-center justify-center text-red-500 font-bold pt-10 ">
        Verify Your Age{" "}
      </h2>
      <h2 className=" flex items-center justify-center text-gray-500 font-bold pt-10 ">
        Please conform your birth year, this data will not be stored
      </h2>

      <div className="flex items-center justify-center">
        <input
          type="text"
          id="BirthYear"
          className="  mt-6 p-2 bg-blue-300 border rounded-md "
          placeholder="Your Birth Year "
          required
        />
      </div>
      <div className=" flex items-center justify-center ">
        {" "}
        <button className="bg-sky-100 border rounded-md w-48 mt-2 p-1 ">
          Contine
        </button>
      </div>
    </div>
  );
}
