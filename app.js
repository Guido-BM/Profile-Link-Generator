document.addEventListener("DOMContentLoaded", (event) => {
  const template = ` 
   
      <div class="postedLink bg-body-tertiary p-2">
              
        <div class="d-flex flex-row justify-content-between">
          <p>Link #1</p><button type="button" class="btn btn-light buttonRemovePost border-0">Remove</button>
        </div>
        <div>
          <label class="w-100">
            Plataforma:
            <select class="form-select mb-3">
              <option selected></option>
              <option value="Github">Github</option>
              <option value="YouTube">YouTube</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Instagram"> Instagram </option>
              <option value="Others">Others</option>
            </select>
          </label>
        </div>
        <div>
          <label for="platform-url">Aquí tu link:</label>
          <div class="input-group">
            <span class="input-group-text" id="destinationLink">https://</span>
            <input type="text" class="form-control" id="platform-url" /></div>
        </div>
      </div>
  
    `;

  const buttonCreateNewPost = document.querySelector("#buttonNewPost");

  buttonCreateNewPost.addEventListener("click", () => {
    const formContainer = document.querySelector("#formContainer");

    const newPost = document.createElement("div");
    newPost.innerHTML = template;

    formContainer.appendChild(newPost);

    const buttonRemovePost = newPost.querySelector(".buttonRemovePost");

    buttonRemovePost.addEventListener("click", () => {
      newPost.remove();
    });
  });
});
