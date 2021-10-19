~~~mermaid
      gantt
        dateFormat  YYYY-MM-DD
        title 親子遊iOS App

        section UI
        構思整合                    :active, des1, 2021-10-18,3d
        prototype                  :active,  des2, 2021-10-19,5d
        Future task               :         des3, after des2, 5d
        Future task2              :         des4, after des3, 5d

        section Frontend
        coding :crit, done, 2021-10-19,20d
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d

        section Backend
        Describe gantt syntax               :active, a1, after des1, 3d
        Add gantt diagram to demo page      :after a1  , 20h
        Add another diagram to demo page    :doc1, after a1  , 48h

        section UX
        Describe gantt syntax               :after doc1, 3d
~~~
