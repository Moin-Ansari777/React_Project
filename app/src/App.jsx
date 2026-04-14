import { useSelector , useDispatch} from "react-redux"
import { addToProduct } from "./redux/action/productAction";
import Products from "./Products";

const App = () => {
  const dispath = useDispatch();
  const state = useSelector(state=>state);
  console.log(state.cartReducer)

  const handleAddToProduct = ()=>{
    dispath(addToProduct({
      id : 1,
      name : 'samsung'
    }))
  }
  return (
    <div>
     <button onClick={handleAddToProduct}
      className="border-2 p-2"
      >AddToProduct</button>
      <Products />
    </div>
  )
}

export default App
