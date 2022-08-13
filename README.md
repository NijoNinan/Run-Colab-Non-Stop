
# Run-Colab-Non-Stop

As we all know, Google Colab is a super awesome tool, a real blessing for all programmers.
We all know how much services are provided by colab.  
But there are some **acceptable limitations** like shutdown at 90 mins if no interactivity and shutdown at 12 hrs no matter what.  
But here I am trying to push the limits and squeeze out what I can get from colab and try to ease my accessibility.  

**Here is an browser extension that will help achieve what I tried**

---

## What all functionalities are there?

- It will automatically trigger run all as soon as you open the colab in your browser
- It will mock continous interactivity, so that your kernel won't shutdown after 90 mins
- It will have a monitor on a specific cell and if that cell is not running, then it will again trigger run all. This means it will restart even after the kernel shuts down
