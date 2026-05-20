

function Form() {
    return (
        <>
            <section class="question">
                <h2>Have Questions About Planetary Science?</h2>
                <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
                    Reach out and we’ll get back to you.</p>
                <form action="https://whitebricks.com/tsacademy.php">
                    <fieldset class="personal-detail form-input">
                        <label for="name">Fullname <span class="red-star">*</span></label>
                        <input id="name" type="text" placeholder="Fullname" required />
                    </fieldset>
                    <fieldset class="personal-detail form-input">
                        <label for="email">Email <span class="red-star">*</span></label>
                        <input id="name" type="text" placeholder="example@example.com" required />
                    </fieldset>
                    <fieldset class="personal-detail form-input">
                        <label for="phone-number">Phone number</label>
                        <input id="phone-number" type="text" placeholder="+234568890565" required />
                    </fieldset>
                    <fieldset class="form-input">
                        <label for="message">Message <span class="red-star">*</span></label>
                        <textarea rows="10" cols="70" id="message" placeholder="Enter your message"></textarea>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default Form