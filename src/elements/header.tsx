export function Header() {
    function onClickHandle() {
        window.location.href = "index.html";
    }

    return (
        <header>
            <h1 onClick={onClickHandle}>Pierre Ducloux</h1>
        </header>
    );
}