import Task from "../model/taskModel.mjs";


//create a task
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

//get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json(err)
  }
}

//get a task 

export const getTask = async (req, res) => {
  const { id } = req.params
  try {
    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json(`No task with id ${id}`)
    }
    res.status(200).json(task)
  } catch (err) {
    res.status(500).json(err)
  }
}

//Delete a task

export const deleteTask = async (req, res) => {

  try {
    const { id } = req.params
    const task = await Task.findByIdAndDelete(id)
    if (!task) {
      return res.status(404).json(`No task with id ${id}`)
    }
    res.status(200).send(`Task is deleted`)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

//update a Task
export const updateTask = async (req, res) => {

  try {
    const { id } = req.params
    const task = await Task.findByIdAndUpdate(
      { _id: id }, req.body, { new: true, runValidators: true }
    )

    if (!task) {
      return res.status(404).json(`No task with id ${id}`)
    }
    res.status(200).json(task)


  } catch (err) {
    res.status(200).json({ msg: err.message })
  }
}