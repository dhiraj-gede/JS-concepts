/** GET REQUEST
    * @async
    * @function fetch Data
    * @returns {Promise<string>} The data from the URL.
* */ 
async function getTodos() {
/** Method1:    Detailed Syntax
    * getRequest using axios
    * @param  {get} method getRequest
    * @param  {'https://jsonplaceholder.typicode.com/todos'} url fetch URL
    * @param  {_limit} params HTTP params sets rate limiter to 5
    * @yields {JSON}
*/
    // const res= await axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     params:{
    //         _limit:5
    //     }
    // })
        /**
           * Method2:   Short Syntax
           * @param axios.get getRequest
           * @param {'https://jsonplaceholder.typicode.com/todos'} url 
           * @param  {_limit} params HTTP params: rateLimiter, limits rate to 5
         */


        const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {_limit:5}) 

    showOutput(res)
  }
  
  
  /** POST REQUEST
    * @async
    * @function post Data
    * @returns posts data to url
* */ 
  async function addTodo() {
    /** Method1:    Detailed Syntax
         * getRequest using axios
         * @param  {post} method postRequest
         * @param  {'https://jsonplaceholder.typicode.com/todos'} url fetch URL
         * @param {{title: string, completed: boolean}} Object object to be passed as param
         * @yields {JSON}
    */
    // const res= await axios({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     data:{
    //         title: 'newTodo',
    //         completed: false
    //     }
    // })

    /** Method2:    Short Syntax
         * getRequest using axios
         * @param  {post} axios.post postRequest
         * @param  {'https://jsonplaceholder.typicode.com/todos'} url 
         * @param {{title: string, completed: boolean}} Object object to be passed as param
         * @yields {JSON}
    */
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: 'newTodo',
        completed: false
    }) 
    showOutput(res)
  }
  
  
  /** PUT/PATCH REQUEST
    * @async
    * @function update Data
    * @returns updates data 
* */ 
  async function updateTodo() {
    const userID = 1;

    /** Method 1: 
     * put -- Replaces object at given index by provided Object, in this case: given UserID 
     * @param {put} axios.put Replaces object at given Index
     * @param {{userID: number}} userID index
     * @param {{title: string, completed: boolean}} Object object to be passed as param
     * @yields {JSON}   
     * {
            "title": "Replaced Todo",
            "completed": true,
            "id": 1
        }
    */


    const putUpdate = await axios.put(`https://jsonplaceholder.typicode.com/todos/${userID}`, {
        title: 'Replaced Todo',
        completed: true
    }) 
    // showOutput(putUpdate)

    /** Method 1: 
     * patch -- Updates object at given index, in this case: given UserID 
     * @param {patch} axios.patch Updates object at given Index
     * @param {{userID: number}} userID index
     * @param {{title: string, completed: boolean}} Object object to be passed as param
     * @yields {JSON}  
     * {
     *     "userId": 1,
     *     "id": 1,
     *     "title": "Patched Todo",
     *     "completed": true
     *  }
    */
   const patchUpdate = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${userID}`, {
        title: 'Patched Todo',
        completed: true
    }) 
    showOutput(patchUpdate)
  }
  
  /** DELETE REQUEST
    * @async
    * @function update Data
    * @returns updates data 
* */ 
async  function removeTodo() {
    const userID = 1;
    /** Method 1: 
     * Delete -- Deletes object at given index, in this case: given UserID 
     * @param {delete} axios.delete Deletes object at given Index
     * @param {{userID: number}} userID index
     * @param {{}} Object object to be passed as param
     * @yields {{}}  empty Object
     
    */
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${userID}`) 
    console.log(res.data)
    showOutput (res)
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    console.log('Simultaneous Request');
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);