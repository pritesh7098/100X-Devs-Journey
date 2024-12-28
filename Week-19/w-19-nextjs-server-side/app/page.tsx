import axios from "axios";

export default async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
    return response.data;
  } catch (e) {
    console.log(e);
  }



  return (


    <div>

<h1>Homepage</h1>


    </div>
  )

}



