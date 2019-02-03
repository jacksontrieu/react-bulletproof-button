import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hashToStyles, toPx } from './util';

export default class BulletproofButton extends Component {
  render() {
    const vmlRectStyles = hashToStyles({
      'height': toPx(this.props.height),
      'v-text-anchor': 'middle',
      'width': toPx(this.props.width)
    });

    const vmlCenterStyles = hashToStyles({
      'color': this.props.fontColor,
      'font-family': this.props.fontFamily,
      'font-size': toPx(this.props.fontSize),
      'font-weight': this.props.fontWeight
    });

    const vmlArcSize = this.calculateVmlArcSize();

    const htmlLinkStyles = hashToStyles({
      'background-color': this.props.backgroundColor,
      'border-color': this.props.borderColor,
      'border-style': this.props.borderStyle,
      'border-width': toPx(this.props.borderWidth),
      'border-radius': toPx(this.props.borderRadius),
      'color': this.props.fontColor,
      'display': 'inline-block',
      'font-family': this.props.fontFamily,
      'font-size': toPx(this.props.fontSize),
      'font-weight': this.props.fontWeight,
      'height': toPx(this.props.height),
      'line-height': toPx(this.props.height),
      'mso-hide': 'all',
      'text-align': 'center',
      'text-decoration': 'none',
      'width': toPx(this.props.width),
      '-webkit-text-size-adjust': 'none'
    });

    const vmlButton = `
      <!--[if mso]>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                     xmlns:w="urn:schemas-microsoft-com:office:word"
                     href="${this.props.href}"
                     style="${vmlRectStyles}"
                     arcsize="${vmlArcSize}"
                     strokecolor="${this.props.borderColor}"
                     fillcolor="${this.props.backgroundColor}">
          <w:anchorlock />
          <center style="${vmlCenterStyles}">
            ${this.props.text}
          </center>
        </v:roundrect>
      <![endif]-->
    `;

    const htmlButton = `
      <a
        href="${this.props.href}"
        style="${htmlLinkStyles}">
        ${this.props.text}
      </a>
    `;

    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: vmlButton}} />
        <div dangerouslySetInnerHTML={{__html: htmlButton}} />
      </div>
    );
  }

  calculateVmlArcSize = () => {
    return Math.round((this.props.borderRadius / this.props.width) * 100).toString() + '%';
  }
}

BulletproofButton.defaultProps = {
  backgroundColor: '#556270',
  borderColor: '#1e3650',
  borderRadius: 4,
  borderStyle: 'solid',
  borderWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 13,
  fontWeight: 'bold',
  fontColor: '#fff',
  height: 40,
  width: 200
};

BulletproofButton.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.number,
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  height: PropTypes.number,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number
};
