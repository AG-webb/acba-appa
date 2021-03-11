import React from 'react';
import './UsefulDoc.scss';
import pdfLogo from '../../../assets/img/icons/pdf.svg';
import docLogo from '../../../assets/img/icons/doc.svg';
import xlsLogo from '../../../assets/img/icons/xls.svg';

class UsefulDoc extends React.Component {
    render() {
        return (
            <div className="useful-doc">
                <div className="useful-doc__gradient"></div>
                <a href="#" className="useful-doc__wrap">
                    <div className="useful-doc__icon">
                        <img src={this.props.type == "pdf" ? pdfLogo : this.props.type == "doc" ? docLogo : xlsLogo} alt={`file ${this.props.type}`}/>
                    </div>
                    <div className="useful-doc__title text-medium">
                        {this.props.title}
                    </div>
                    <div className="useful-doc__size text-medium">
                        ({this.props.size})
                    </div>
                </a>
            </div>
        );
    }
}

export default UsefulDoc;