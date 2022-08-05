import { useState } from "react";

export function Home() {
  return (
    <div>
      <div className="container">
        <div className="head">
          <h1>GitHub Repository Tracker</h1>
        </div>

        <form action="" className="form" id="form">
          <div className="form-camp">
            <input type="text" placeholder="Type the GitHub username" />
            <button type="submit">Search</button>
          </div>

          <section id="list-respos">
            <div className="user-not-found nf-visible">
              <p>Ops! User not found</p>
            </div>

            <div className="empty em-visible">
              <p>There is not Repository!</p>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
