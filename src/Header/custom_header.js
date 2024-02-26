import './custom_header.css';

function CustomHeader(){
    return(
        <div>
            <div>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
            <label>Florian AMANN</label>
            </div>

            <ul>
                <li>Contact</li>
                <li>Caca</li>
            </ul>
        </div>
    )
}

export default CustomHeader;
