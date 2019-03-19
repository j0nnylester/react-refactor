handleUsernameChange = event => {
    const { value } = event.target;
    this.setState(() => ({
        username: value
    }));
};

handleEmailChange = event => {
    const { value } = event.target;
    this.setState(() => ({
        email: value
    }));
};

handlePasswordChange = event => {
    const { value } = event.target;
    this.setState(() => ({
        password: value
    }));
};

handleConfirmPasswordChange = event => {
    const { value } = event.target;
    this.setState(() => ({
        confirmPassword: value
    }));
};
