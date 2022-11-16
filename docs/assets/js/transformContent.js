import path from "path";

function transformContent(element) {
    //diagrams
    var value = "";
    element.body.children
        .filter(
            f => f.tag == "div" && 
            f.props.className[0] == "nuxt-content-highlight" && 
            f.children[0].props.className.includes("language-mermaid")
        )
        .forEach(fr => {
            value = getAllValue(fr);

            var textElement = new Object();
            textElement['type'] = "text";
            textElement['value'] = value;
            
            fr.props.className = "mermaid";
            fr.tag = "pre";
            fr.children = [textElement];
        });

    //head
    element.body.children
        .filter(f => f.tag == "h1" || f.tag == "h2")
        .forEach(c =>
            c.children
                .filter(f => f.type == "text" && f.value.includes("{#"))
                .forEach(a => transformContentHead(c, a))
        );

    //sidebar tag
    element.toc
        .filter(f => f.text.includes("{#"))
        .forEach(transformSidebarTag);

    //table
    element.body.children
        .filter(f => f.tag == "table")
        .forEach(transformTable);

    //alert
    element.body.children
        .filter(f => f.tag == "blockquote")
        .forEach(c =>
            c.children
                .filter(fm => fm.tag == "p")
                .forEach(p =>
                    p.children
                        .filter(
                            pf =>
                                pf.type == "text" && pf.value.startsWith(":")
                        )
                        .forEach((pm, index) =>
                            transformAlert(c, p, pm, index)
                        )
                )
        );

    //image
    element.body.children
        .filter(ef => ef.tag == "p")
        .forEach(em =>
            em.children
                .filter(cf => cf.tag == "img")
                .forEach(transformImage)
        );
}

function transformAlert(...params) {
    const conversions = {
        ":info:": { type: "info" },
        ":information_source:": { type: "info" },
        ":bulb:": { type: "tip" },
        ":tip:": { type: "tip" },
        ":x:": { type: "danger" },
        ":danger:": { type: "danger" },
        ":white_check_mark:": { type: "success" },
        ":success:": { type: "success" },
        ":warning:": { type: "warning" },
    };

    params[0].tag = "alert";
    params[0].props = conversions[params[2].value];
    params[1].children.splice(params[3], 1);

    //markdowndaki alertleri belirlerken alert türü ile içerik arasındaki boşluk...
    //alert'e dönüştükten sonra yukarıda kötü görüntü oluşturuyor. Onu kaldırdık
    if (
        params[0].children[1].tag == "p" &&
        params[0].children[1].children.length == 0
    ) {
        params[0].children.splice(1, 1);
    }
}

function transformContentHead(...params) {
    var splitValue = params[1].value.split("{#");
    var withoutHastag = splitValue[1].replace("}", "");
    params[0].props.id = withoutHastag;
    params[0].children[1].value = splitValue[0];
}

function transformSidebarTag(element) {
    var splitText = element.text.split("{#");
    element.text = splitText[0];
    element.id = splitText[1].replace("}", "");
}

function transformTable(element) {
    var props = { class: "table" };
    element.props = props;
}

function transformImage(element) {
    element.props.src = path.join("/assets/images/content/", element.props.src);
}

function getAllValue(element) {
    var value = "";
    if(element.children){
        element.children.forEach(fe => value += getAllValue(fe))
    }else { 
        return element.value;
    }

    return value
}

export default transformContent;
