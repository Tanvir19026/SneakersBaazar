const Pagination = () => {
    return (
      <div className="join"style={{ display: 'flex', margin:'25px',justifyContent: 'center' }}>  {/* Added justify-center class */}
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
      </div>
    );
  };
  
  export default Pagination;
  