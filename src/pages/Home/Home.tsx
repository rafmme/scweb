import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, ProductCard, ProductForm } from '../../components';
import HTTPRequestBuilder from "../../utils/HTTPRequest/HTTPRequestBuilder";

export const Home = () => {
  const initialState = {
    results: [],
    executeDeletion: false,
    listOfProductsForDeletion: [],
    showModal: false,
  }
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const {
    executeDeletion, results,
    listOfProductsForDeletion, showModal
  } = state;

  useEffect(() => {
    let call = true;
    const apiUrl = process.env['REACT_APP_API_URL'];

    async function executeHttpRequest (url: string, method: string) {
      const response = await new HTTPRequestBuilder()
      .withURL(url)
      .method(method)
      .queryParams(undefined)
      .headers(undefined)
      .data(undefined)
      .build()
      .send();

      setState({
        ...state,
        executeDeletion: method.toLowerCase() === 'get' ? false : executeDeletion,
        listOfProductsForDeletion: method.toLowerCase() === 'get' ? [] : listOfProductsForDeletion,
        results: method.toLowerCase() === 'get' ? response?.products || results : results,
      });
    };

    if (executeDeletion && listOfProductsForDeletion.length > 0) {
      listOfProductsForDeletion.forEach(sku => {
        executeHttpRequest(`${apiUrl}/products/${sku}`, 'DELETE');
      });
      history.go(0);
    }

    executeHttpRequest(`${apiUrl}/products`, 'GET');

    return () => {
      call = false;
    }
  }, [executeDeletion]);

  const toggleModalVisibility = () => {
    setState({ ...state, showModal: !showModal });
  };

  const onChecked = (e, sku) => {
    e.preventDefault();
    
    if (e.target.checked) {
      listOfProductsForDeletion.push(sku);

      setState({
        ...state,
        executeDeletion: false,
        listOfProductsForDeletion,
      });
    } else {
      const skuList = listOfProductsForDeletion.filter(productSku => sku !== productSku);

      setState({
        ...state,
        executeDeletion: false,
        listOfProductsForDeletion: skuList,
      });
    }
  };

  const handleMassDeletion = (e) => {
    e.preventDefault();
    if (listOfProductsForDeletion.length < 1) {
      return;
    }

    setState({
      ...state,
      executeDeletion: true,
    });
  };

  return (
    <>
      <header id="header">
        <div id="title-div">
          <h2>Product List</h2>
          <div id="action-btn" className="flex-column">
              <button className="btn btn-outline-success" onClick={toggleModalVisibility}>ADD</button>
              <button className="btn btn-outline-danger" onClick={handleMassDeletion}>MASS DELETE</button>
          </div>
        </div>
        <hr/>
      </header>
      <main id="main-content">
        <section>
          <div className="container-fluid">
            <div className="row">
              {results.length < 1 && <h3 style={{ textAlign: 'center' }}>No Products added yet!</h3>}
              {results.map((product: any, i: number) => {
                return <ProductCard
                  key = {i}
                  onCheck = {onChecked}
                  sku = {product.sku}
                  name = {product.name}
                  price = {product.price}
                  size = {product.size}
                  height = {product.height}
                  weight = {product.weight}
                  length = {product.length}
                  width = {product.width}
              />
            })}
            </div>
          </div>
        </section>
        <Modal showModal={showModal} toggleModalVisibility={toggleModalVisibility}>
          <ProductForm />
        </Modal>
      </main>
    </>
  );
};
  
