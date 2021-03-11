import React from 'react';
import UsefulDoc from './UsefulDoc/UsefulDoc';
import './UsefulDocs.scss';

class UsefulDocs extends React.Component {
    render() {
        let docs = [
            {
                title: "Ներքին աուդիտի եզրակացություն",
                type: "pdf",
                size: "427 KB",
            },
            {
                title: "Ֆինանսական միջանկյալ հաշվետվություններ",
                type: "doc",
                size: "427 KB",
            },
            {
                title: "Տարեկան հաշվետվություն",
                type: "pdf",
                size: "427 KB",
            },
            {
                title: "Ներքին աուդիտի եզրակացություն",
                type: "pdf",
                size: "427 KB",
            },
            {
                title: "Ներքին աուդիտի եզրակացություն",
                type: "xls",
                size: "427 KB",
            },
            {
                title: "Ներքին աուդիտի եզրակացություն",
                type: "pdf",
                size: "427 KB",
            },
        ];

        return (
            <div className="useful-docs">
                <div className="dots-decore dots-decore_orange"></div>
                <div className="dots-decore dots-decore_green"></div>
                <div className="row">
                    <div className="column sm-14">
                        <div className="useful-docs__title">ՕԳՏԱԿԱՐ ՀՂՈՒՄՆԵՐ</div>
                        <div className="useful-docs__list">
                            {
                                docs.map((doc, index) => {
                                    return <UsefulDoc key={index} title={doc.title} type={doc.type} size={doc.size}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UsefulDocs;