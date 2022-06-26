type ProductCardProps = {
  sku: string,
  name: string,
  price: number,
  size?: string,
  height?: number,
  weight?: number,
  width?: number,
  length?: number,
  onCheck,
};

export const ProductCard = (
    {
      sku, name, price, size, height,
      weight, width, length, onCheck,
    }: ProductCardProps
  ) => {

  return (
    <div className="col-md-3">
      <div className="card mb-3 shadow-sm">
        <div className="product">
            <input type="checkbox" className="delete-checkbox" onChange={(e) => onCheck(e, sku)} />
            <div className="flex-column prod-info">
              <p>{sku}</p>
              <p>{name}</p>
              <p>{`${price} $`}</p>
              {size && <p>Size: {`${size}`} MB</p>}
              {weight && <p>Weight: {`${weight}`} KG</p>}
              {(height && width && length) && <p>Dimension: {`${height}x${width}x${length}`}</p>}
            </div>
        </div>
      </div>
    </div>
  )
};

