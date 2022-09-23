import NavBar from "../components/NavBar";
export default function Layout(props) {
  console.log(props);
  return (
    <div id="sunmoon">
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
}
