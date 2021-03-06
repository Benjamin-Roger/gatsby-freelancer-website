import React from "react"
import "./Layout.scss"
import { Link } from "gatsby"

import SEO from "../SEO.js"
import Footer from "../Footer/Footer.js"

import BurgerMenu from "react-burger-menu"

import { Fade } from "react-awesome-reveal"

class MenuWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({ hidden: true })

      setTimeout(() => {
        this.show()
      }, this.props.wait)
    }
  }

  show() {
    this.setState({ hidden: false })
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: "none" }
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    )
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMenu: "push",
      side: "right",
      openMenu: false
    }

    this.closeMenu = this.closeMenu.bind(this);


  }

  getItems() {
    // Initialization
    var lang_switcher = ""
    var path = "/"

    if (this.props.lang === "fr") {
      lang_switcher = (
        <Link key="5" to={"/en/"}>
          <span >English website</span>
        </Link>
      )
    } else {
      lang_switcher = (
        <Link key="5" to={"/"}>
          <span >Site en français</span>
        </Link>
      )
      path = "en/"
    }

    // Get all items of the menu

    let items = [
      <h2 key="0">
        <span>Menu</span>
      </h2>,
      <Link onClick={this.closeMenu} key="0" to={path + "#top"}>
        <span >Home</span>
      </Link>,
      <Link onClick={this.closeMenu} key="2" to={path + "#contact"}>
        <span >Contact</span>
      </Link>,
      <a key="3" href="https://blog.sapiowork.com/">
        <span >Blog</span>
      </a>,
      <Link onClick={this.closeMenu} key="4" to={path + "#portfolio"}>
        <span >Portfolio</span>
      </Link>,
      lang_switcher,
    ]

    return items
  }

  closeMenu() {

    // Using falsey values to force re-render

    if(this.state.openMenu === false) {
      this.setState({ openMenu: -1 });
    } else {
      this.setState({ openMenu: false });
    }

  }



  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];



    return (
      <MenuWrap
        wait={10}
        side={this.state.side}
      >


          <Menu
            width={"300px"}
            id={this.state.currentMenu}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            right={this.state.side === "right"}
            isOpen={this.state.openMenu}
          >
            {this.getItems()}
          </Menu>




      </MenuWrap>
    )
  }

  render() {
    return (
      <div id="outer-container" style={{ height: "100%" }}>
        {this.getMenu()}

        <SEO lang={this.props.lang} title={this.props.title} />

        <Fade className="page-wrapper" triggerOnce>
          <main id="page-wrap">
            {this.props.children}
            <Footer lang={this.props.lang} />
          </main>
        </Fade>
      </div>
    )
  }
}

export default Layout
