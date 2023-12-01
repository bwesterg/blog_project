export default function Post(){
    return (
        <div className="post">
            <div className="image">
                <img src="https://www.traminerhof.it/wp-content/uploads/2020/04/stilfser-joch-768x512.jpg" alt="" />
            </div>
            <div className="texts">
                <h2>Stelvio Pass</h2>
                <p className="info">
                    <a className="author">Mr. Chips</a>
                    <time>2023-11-30 17:46</time>
                </p>
                <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

    );
};