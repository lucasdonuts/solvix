import Timer from './timer/Timer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Home = () => {
  return(
    <>
      <SignupForm />
      <hr />
      <LoginForm />
      <hr />
      <Timer />
    </>
  )
}

export default Home;