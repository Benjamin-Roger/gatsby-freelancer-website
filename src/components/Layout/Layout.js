import React from 'react';
import './Layout.scss';
import { Link } from 'gatsby';

import SEO from '../SEO.js';
import Footer from '../Footer/Footer.js';


import BurgerMenu from 'react-burger-menu';

class MenuWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

        if (sideChanged) {
            this.setState({ hidden: true });

            setTimeout(() => {
                this.show();
            }, this.props.wait);
        }

    }

    show() {
        this.setState({ hidden: false });
    };


    render() {
        let style;

        if (this.state.hidden) {
            style = { display: 'none' };
        }

        return (
            <div style={style} className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
}

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'push',
            side: 'right'
        };
    }

    getItems() {

        // Initialization
        var lang_switcher = '';
        var path = "/";

        if (this.props.lang === "fr") {
            lang_switcher = <Link key="5" to={"/en"} ><span>English website</span></Link>;

        } else {
            lang_switcher = <Link key="5" to={"/"} ><span>Site en français</span></Link>;
            path = "en/";
        };

        // Get all items of the menu

        let items = [
            <h2 key="0"><span>Menu</span></h2>,
            <Link key="0" to={path + "#top"} ><span>Home</span></Link>,
            <Link key="2" to={path + "#contact"}><span>Contact</span></Link>,
            <a key="3" href="/blog"><span>Blog</span></a>,
            <Link key="4" to={path + "#portfolio"}><span>Portfolio</span></Link>,
            lang_switcher
        ];

        return items;
    }

    getMenu() {
        const Menu = BurgerMenu[this.state.currentMenu];

        return (
            <MenuWrap wait={10} side={this.state.side}>
                <Menu width={'300px'} id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={(this.state.side === 'right')}>
                    {this.getItems()}
                </Menu>
            </MenuWrap>
        );
    }

    render() {


        return (
            <div id="outer-container" style={{ height: '100%' }}>
                {this.getMenu()}

                <SEO
                    lang={this.props.lang}
                    title={this.props.title}
                />

                <main id="page-wrap">
                    {this.props.children}


                    <Footer lang={this.props.lang} />

                    
                </main>


                



            </div>
        );
    }
}




export default Layout;