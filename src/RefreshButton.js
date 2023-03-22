
function RefreshButton() {
  
    return (
      <div>
        <br />
        <button onClick={()=>window.location.reload()}>
        Refresh
      </button>
      </div>
    );
}
  
  export default RefreshButton;