import { jsx as _jsx } from "react/jsx-runtime";
export function Header() {
    function onClickHandle() {
        window.location.href = "index.html";
    }
    return (_jsx("header", { children: _jsx("h1", { onClick: onClickHandle, children: "Pierre Ducloux" }) }));
}
