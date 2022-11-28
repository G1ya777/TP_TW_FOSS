

const Settings = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div class="custom-control custom-switch">

                <input type="checkbox" class="custom-control-input" id="darkSwitch" />

                <label class="custom-control-label" for="darkSwitch">Dark Mode</label>

            </div>
        </div>
    );
}

export default Settings;