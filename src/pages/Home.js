import React from "react";

function Home() {
  return (
    <>
      <header style={{ background: "blue", width: "100%", height: "200px" }}>
        teste ground
      </header>
      <section style={{ background: "yellow", width: "100%", height: "200px", position:'relative' }}>
          <div style={{position: 'absolute', bottom: 0}}>teste</div>
        corpo ground
      </section>
      <footer style={{ background: "red", width: "100%", height: "100px", position: "absolute", bottom: 0 }}>
        footer
      </footer>
    </>
  );
}

export default Home;
