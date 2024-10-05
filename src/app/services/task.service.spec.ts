import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Task } from '../interfaces/task';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('newTaskObj', () => {
    it('should create a new task object with the given content', () => {
      const taskContent = 'New Test Task';
      const task: Task = service.newTaskObj(taskContent);

      expect(task).toBeDefined();
      expect(task.id).toBeTruthy();
      expect(task.taskContent).toBe(taskContent);
      expect(task.type).toBe('task');
      expect(task.created).toBeInstanceOf(Date);
      expect(task.isDone).toBe(false);
      expect(task.dateToDo).toBeNull();
    });
  });

  describe('saveTasksToLocalStorage', () => {
    beforeEach(() => {
      spyOn(localStorage, 'setItem').and.callFake(() => {});
    });

    it('should save tasks to local storage', () => {
      const tasks: Task[] = [
        {
          id: '1',
          taskContent: 'Test Task',
          type: 'task',
          created: new Date(),
          isDone: false,
          dateToDo: null,
        },
      ];

      service.saveTasksToLocalStorage(tasks);
      expect(localStorage.setItem).toHaveBeenCalledWith('tasks', JSON.stringify(tasks));
    });
  });

  describe('loadTasks', () => {
    it('should load tasks from local storage if they exist', () => {
      const tasks: Task[] = [
        {
          id: '1',
          taskContent: 'Test Task',
          type: 'task',
          created: new Date(),
          isDone: false,
          dateToDo: null,
        },
      ];
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(tasks));

      const loadedTasks = service.loadTasks();
      expect(localStorage.getItem).toHaveBeenCalledWith('tasks');
    });

    it('should return an empty array if there are no tasks in local storage', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);

      const loadedTasks = service.loadTasks();
      expect(loadedTasks).toEqual([]);
    });
  });
});
