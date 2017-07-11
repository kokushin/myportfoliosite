import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  render() {
    const myProfileCover = {
      backgroundImage: `url(https://pbs.twimg.com/media/DDuhpaDV0AAdwQx.jpg:large)`
    }
    const myProfileIcon = {
      backgroundImage: `url(https://pbs.twimg.com/profile_images/835660761946976256/mv3p9fxS_400x400.jpg)`
    }
    return(
      <div className="uc-section _center">
        <div className="uc-section-title">About</div>
        <p>Hello,</p>
        <div className="uc-grid-unit">
          <div className="uc-grid">
            <div className="uc-card">
              <div className="uc-card-image" style={myProfileCover}></div>
              <div className="uc-card-header">
                <div className="uc-card-icon" style={myProfileIcon}></div>
                <div className="uc-card-title">Yusuke Ishiguro (Kokushin)</div>
              </div>
              <div className="uc-card-body">
                <p>1993年愛知県生まれ。<br/>中学2年生からWeb業界へのあこがれを持ち、専門学校を経て名古屋のWeb制作会社へ入社。HTML, CSS, JavaScriptを活用し大手企業サイトのマークアップ、システム実装に携わる。<br/>Webサービス開発、フロントエンド周りの技術に興味あり。最近だとReact.js, Node.jsを触るのがたのしい。<br/>くだらないものから実用的なものまで、とにかく作ってみる精神で生きてます。</p>
              </div>
              <div className="uc-card-footer uc-grid _col-5 _small-col-3">
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://twitter.com/kokushing" target="_blank"><i className="fa fa-twitter"></i></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://www.facebook.com/yusuke.1496" target="_blank"><i className="fa fa-facebook"></i></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://github.com/kokushin" target="_blank"><i className="fa fa-github"></i></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://www.instagram.com/kokushin_/" target="_blank"><i className="fa fa-instagram"></i></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="mailto:mail@kokush.in"><i className="fa fa-envelope"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uc-btn-unit">
          <button className="uc-btn" onClick={this.props.handleCloseModal}><span>Close</span></button>
        </div>
      </div>
    );
  }
}

export default About;