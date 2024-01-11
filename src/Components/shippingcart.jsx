import './Style.css'

const Shippingcart = () => {
    return (
        <div className="freeshippingContainer">
             <div className="sCart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#7465db" className="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                    </svg> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 
                    <h3>Free Shipping</h3>
                    <p>Free shipping on all India order , above $999</p>
                    </span>
             </div>
             <div className="sCart">
             <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#7465db" className="bi bi-box" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
            </svg> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 
                    <h3>30 Days Return</h3>
                    <p>Up to 30 Days Return Policy Our Products</p>
                    </span>
             </div>
             <div className="sCart">
             <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="#7465db" viewBox="0 0 16 16">
  <path d="M7 6a1 1 0 0 1 2 0v1H7z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 
                    <h3>100% Secure Payment</h3>
                    <p> Secure Payment on All Indian Digital Payment Getways </p>
                    </span>
             </div> 
        </div>
    );
}

export default Shippingcart;
