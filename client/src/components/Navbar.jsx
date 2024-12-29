import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABIFBMVEX///8AiKq7AJcAzP//K9WWeNBZOKP///1XNaK4AJTUd73o5O/36PO6AJKuns1UMaFMI6EAzfkAz/+9Ep1ePaUAeKQEst3o+PzY6e0Bg6D///n+ANEAyf8AhKj/HtSSctH8k+X64fb89/zo4fT70POQeMiBYsJnSK0AfaNb2f752fT6pOf7Vtj8s+X6Zd/8q+r8yfH8dN/0M9f4vuz5jOX+huPzC9D9feL/AMX5te/8RNL+O9b8nefKEKfdALXqIMHc0+6klc+0pt/FuOWkjNe0nt7PxeSNbdfiXMN0VbagiN/RaLjFR6fnqtfRfrzBN6G06PrSV6zH8vp1tciI4PmZxtPow9xTobmy1N6Is8oAjaNJk7OPe796Y7NDEpye6vo88lweAAAJoUlEQVR4nO2dDVvayBbHg4ADCwpBtoFAEgkvgrK+trjqdhdF8bpW60UsrrX1+3+Le2aCmIS8CkmGvfnbPo9tfWJ+/s85c2YymTJMqFChQoUKFSpUqFChQoUKFSpUqFAUCsHHv0ZoUw76FuYkxFS22uub8MnC28Mj+bdtURTbO+mFZ2GY3b19MRaLiZ3tg6BvZQZhI1D64wlGwSrFDiuvf7+I4ndiryigzn7n06ImDkIHJ6WYVqXOAeKDvjGXQhglffh7bFql7Rr880JVakDZ6nQMWIBGXK8sTqxhW9JHbX2EqXCOdypoQQoBQvLuXkc0ZYEyXdo+kBfEnRqUYysWjBM73KUeBn7c6fVjOxQSayd/bMKXU0wEEXaw7QQFmyO2t+iOtc3tfWcoirYpjTWEy/FHy7w3cmevQuMgCve0AwO8KxZQp/SHzFOHw9WOS+5sGau0f0RT5iDEy5VP70MhOHs1mRYcqK+VrZj5gO+AJoYnohQIUHDv8m5bxjjtnQqDAm8/YWTZi82IEiN17bfAWRh5fWrS8j6VxI9BszDpz3/OhUUUD2uBV4H02tLnv2Ym6XTauxT0Num1leTS51lhTo5k1apnYJOd9FpyaWkpOQuO2DlUr6nBsBXUcq4CAzTvjjWxrR1kINpkPkCYZHIFcE7eQyK2j5T1jwkJL3dPu3IgU52xM9icpT9du9M5Xk9rr4dQdVWSGmfVYGHAH5exJp582oS+boKBUyXV+1uK1+NSvJfy/1GIGgY+XOCUxL1dWXW3GEbunUtxRdJ5X2Z8zh0VDDFnzSGOWGofaSMMWLoX8TdJ8YuuzzMdLQzBcdISlMStytu6s1IBqmdxKa6WVD+rqquD7zBYdubsd0qHm9oI0kSYWmeyj+4YwCRtUqfz+3FN1qd291wyYsGpg3zLHCNnMI95rJX2d2QGvRUq/GnqNG6IoqROlRQCH4iMYXBpMzan09lL63IAyWcNMxSCI52leF/yxhwmuTaNI8a2a1oQmBH145cwspirXpfqfZI6XgOZwRAgXeqIsfYOiaq3CIPe5cLSlldzzqHD8Tx3rGBwh6NC6bTXK7rShKAcOxPEWtXzSLOGgbr2ilM6+VhT/WxJI1nt1e1dmdD8DR2OtzyWMMQcEmsi6V1UUQ8wJiOLOU4cdzheVgI7GCXWcO+CdKOkpndxinPR9dIcexis/6QZ9LqkrFQA2T2KotUUw3vV4TiCWfmFUUcYDxH27CrCNOp5FmrOYVQy610cSbp87nr0HMQtDI/41OkMKASncZGCqJ0/kFsYlOrNiIJ1Ka2mPIg1tzDdunXv4kx16ZKU6aBhLkz7Y3dq5Oc/hLoOM7l/MQcU6Wo5QwEMQmQBZkZbNhIJGmDI0tjZTEWgsbGcWKYBhlHasu7p5XtRJIyyTAsMo6xfOJjGGOkqj1FogsE9Tdp6smysRj6hsNAEA/0Ij6rupgA4wjJjFKpgxvfRP3eFkpig0AWjELkp042EmoU6GDKzqZ45mjo3VBFGJQwBctThNK4SWhQ6YciOu751JZBey/EiwOB5QV0ybaYb+SkSamEYUqhNO5zGRn4qxLyDsWexh8GraNV6w4BlI79syOIJjHy9Ym+NHcwYqXepN+fKCMM7GIapfUna4TiEYZA21hr5jKEpnsHwUIxuviRXZodRRp3zSZkmI4th7nvoDFwyffs1aWWPM2eI5N75uBwvm7viIQzWt1/WLMxxAUOWoOvS1IDvJwzD3FwnV8zccQMDH9Vz42rsGwxiKjdfV0zccQFDLrWatUPxFgYvL27empjjDoYJHIZcV+5eG9K4hzFoxvzMGSyY2teMCsHCwCDVbh2En3DfrkyVaXsYsnA8WQkPCAZun9c/LklPdTjOBs3AYRiOvdNv2kP8t/8m3cAQV/jCU+H1OsHBRFsDTn1V3JZAh7OUdAwDwYkK98Kvhde/CA6GjbLDgd4cpnL79a2wWU/O4Ffh4akJMME7w0ajZfaFU228IK85Md9uJ4XNBoZ7HDWFSJEOZ0Dl1h2v3rFAHijfXI9bAisYnnm8jwgRECXOEE3FGs+kocNJWsIgpvBPRCAsEWqcAbG5IS4EkwfBZEtZBY86S0kjGLL3hHv4LhQjEepgINZyd4hXZw5Irn1ZS5quaD6OIm+iCyYazbUG2ifaeKniZsUQBiIM5z2lMDmlEpAFfnX6QIdzreeA39w9oAgCpTBjovJw+nvot8AC6+OTGoRSmBwLZZrTbdrTvxvHQYQ16YdRwg06HC2M+nPoXf4RgKQYEeiHIXV6ODD9VoWH702dKXTDgDkv3NQXIxkh6F308fU+mGyKmfdWIFOYMtsaIN3sAOf9fcQYxR1MPpOty/7B4OSZ6nAK98YRNoZx3Jslshs9D7Y1WcFASwAdDmk6lZficLIUzVhcOJPJnla9eFPIEgYKAfsy6aYfvzdNQdzAJH5edb1Zl7GGyeFxZ6DMv0ZNc1NcwCSyib5XmzQtYZQGp9zieO6+aJorznMmkchkNlY1O/D9gxkTwUR0ZJ73LpxJZPPPVQ9fRLOHwS3OBwcs9jCZ5ee+0qQGCBPNfbBJF3uYBJSwH8rrjt7JN5jsxmrK61fpfIKBkaU7/92ygcBkfv7o+3EAih8w2QT0Lt6jzBnGYJzJJzI/T1N+kMwb5vWiKhioYV2fULyGgQG/5+MZFF7CJDIbp74eRuMVDB5Zlp+7/h7Y4FEBAFcy9T75g480HjmzjHsX30+e8AbmZ37V63cyfYM5/VEN5BQqT2CCQfEIJqhDAj2BCUohjLGaBf/rlw4mNy+Y4q+FoA/U5Ia58lxgmpHR9Eq7z0LcXcsWxx5GaI4euaCNweJeWrPCNL8/BJ4wihDEWrlsuUprAVMsRoTifYGW/zsE3wWHzTGtBVYwQlMYFSghIcKPygcsWzbLHQsYofn06PfJXzbC+zLQi2mkmcEIRUh8mc4TmzmzQmAGU4QIo8oUtdCglXMOIwijR3pR8KgDZTo3BWQAIzxBOeYY/SNcqoQQN2RZPY0BTBPKcdA3ayd8POlgyJatYATcu9w/8pQVsWnhoOFxh8Oqg03vDO5daBparASx9qIxRwvTjNDSu9iLnMUAqRN9awkmMEUYWAScLIsCowiPOuVoWQsDKM0R9XlvJMTfsToYqGEPPh6LOT/x+IWHYY6UaQIjCBHhfmHyflqIHwyj7MQZiDAK2zCnwoXgBSaiACNERnhkCfqOZhAiM7eXFvuhiHuXhUwXrTAOC1PJRedQhGduC5z4ev1rQEKFChUqVKhQoUKFChUqVKhQoUL9n+t/wJZ9tQ8JjK0AAAAASUVORK5CYII="
              alt="my logo"
            />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=it">
            <h6>IT</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=family">
            <h6>FAMILY</h6>
          </Link>
          <Link className="link" to="/?cat=sport">
            <h6>SPORT</h6>
          </Link>
          <Link className="link" to="/?cat=school">
            <h6>SCHOOL</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser ? currentUser.username : "Guest"}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
