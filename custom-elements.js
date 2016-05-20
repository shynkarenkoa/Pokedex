(function()
{
    "use strict"

    if ("customElements" in window) return
    if (!("registerElement" in document)) return

    window.customElements =
    {
        define: function(tag, constructor)
        {
            var proto = constructor.prototype

            proto.createdCallback = constructor
            proto.attachedCallback = proto.connectedCallback
            proto.detachedCallback = proto.disconnectedCallback

            delete proto.connectedCallback
            delete proto.disconnectedCallback

            document.registerElement(tag, proto)
        }
    }
})()