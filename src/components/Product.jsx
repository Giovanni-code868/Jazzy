import  { useEffect, useState } from "react";
import jazzyPic from "../assets/Don Jazzy Home pic.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Product.css";
import heartImg from "../assets/lovelogo.png";
import ingre from '../assets/Group 4.jpg'
import addlogo from '../assets/Group 3 (1).png'
// import Placeholder from "react-bootstrap/Placeholder";

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const getData = async () => {
    try {
        setIsLoading(true)
      const req = await fetch("https://jazzy-mern.onrender.com/api/products");
      const res = await req.json();
      console.log(res.products);
      console.log(res);
      setData(res.products);
    } catch (error) {
      console.log(error);
    }finally{
        setIsLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="container">
      <main className="my-5 row">
    {isLoading &&  (<div> <h2 className="text-center">loading...</h2> </div>)}
        {/* div-1 */}
        <div className="d-none d-lg-block col-lg-3">
          <img src={jazzyPic} alt="jazzys pic" className="w-100 h-100" />
        </div>
        {/* div-2 */}
        <div className="col-lg-9">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            {data.map((datum) => {
              const { _id, title, price, image } = datum;
              return (
                <Card
                  key={_id}
                  className="card-inner rounded-4 position-relative"
                >
                  <Card.Img variant="top" src={image} />
                  <Card.Img
                    className="w-25 position-absolute top-0 end-0 rounded-pill p-3 "
                    variant="top"
                    src={heartImg}
                  />
                  <Card.Body>
                    {/* <Placeholder as={title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder> */}
                   <Card.Title style={{ fontSize: '0.75rem' }} className="txt"> {title} </Card.Title>
                    <Card.Text>
                      <span className="fw-lighter"> Total Price </span>
                      <br />
                      <span className="fw-bold">₦{price} </span>
                      <img src={ingre} className="w-100 " alt="" />
                    </Card.Text>
                    <Button variant="" className="w-100" style={{ backgroundColor: '#ff0000', color: '#ffffff', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>
                   <img src={addlogo} alt="Logo"  />Add To Cart</Button>



                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default Products;