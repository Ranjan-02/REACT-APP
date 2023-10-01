function customRender(reactValue, contenar) {
    const domElement = document.createElement(reactValue.type)
    domElement.innerHTML = reactValue.children
    domElement.setAttribute("href", reactValue.props.href)
    domElement.setAttribute("_blank", reactValue.props.terget)
    contenar.appendChild(domElement)

}

const reactEle = {
    type: "a",
    props: {
        href: "https://google.com",
        terget: "_blank"
    },
    children: "click me visite google"
}





const mainContenar = document.getElementById("root")

customRender(reactEle, mainContenar)