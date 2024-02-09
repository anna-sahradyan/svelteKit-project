<script>
    import toast from "svelte-french-toast";

    let toDoList = [];
    let textInput = '';
    function setEditing(i, isEditing) {
        if (toDoList[i]) {
            toDoList[i].editing = isEditing;
        }
    }

    function deleteToDo(i) {
        toDoList = toDoList.filter((_, index) => index !== i)
    }

    function addToDo() {
        if (textInput.trim() !== '') {
            toDoList = [...toDoList, {content: textInput.trim(), editing: false, checked: false}];
            textInput = "";
        }
        else{
            toast.error("Enter text to add to the task list")
        }
    }
</script>

<p style="display: flex;margin-left:235px">Enter your ToDo here</p>
<div style="display: flex;width: 700px;margin: 0 auto;">
    <input type="text" bind:value={textInput}>
    <button style="width: 200px" on:click={addToDo}>Add</button>
</div>
{#each toDoList as toDo, i}
    <div style="display: flex;align-items: baseline; width: 700px;margin: 0 auto">
        {#if toDo.editing }
            <input type="text" bind:value={toDo.content}>
        {:else}
            <input type="checkbox" bind:checked={toDo.checked}>
            <h4 style="flex-grow: 1">{toDo.content}</h4>
        {/if}
        <div style="display: flex ">
            {#if toDo.editing}
                <button style="width: 100px ;margin: 2px" on:click={()=> setEditing(i,false)}>Save</button>
            {:else }
                <button style="width: 100px ;margin: 2px" on:click={()=> setEditing(i,true)}> Edit</button>
            {/if}
            <button style="width: 100px;margin: 2px" on:click={()=> deleteToDo (i)}>Delete</button>
        </div>
    </div>
{/each}

