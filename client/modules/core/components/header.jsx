import React from 'react';

/**
 * Header
 */
class Header extends React.Component {
  /**
   * Catch click to run the login out
   * @param {object} e
   */
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  /**
   * render header bar
   * @return {XML}
   */
  render() {
    return(<nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/modules">Home</a>
      </div>
      <div className="collapse navbar-collapse"
           id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          {
            this.props.Modules.map((m)=>(
              <li key={m.key} className={
                m.key==this.props.currentModule?'active':''
              }>
                <a href={'/modules/'+m.url}>{m.name}</a>
              </li>
              )
            )
          }
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#"
               className="dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false">
              Menu
              <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
  }
}

export default Header;
