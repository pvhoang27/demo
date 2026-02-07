const Test2 = (props) => {
    console.log('>>> check props children: ', props);
  return (
    <div>Im parent 
        <div>
        {props.children}
        </div>
    </div>
  );
}

export default Test2;