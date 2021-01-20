/*
一、简洁表示法
    案例：
        const getUserInfo = (id = 1) => {
            // ... Ajax

            const name = 'xiaoming';
            const age = 10;

            return {
                name: name,
                age: age,
                say: function() {
                    console.log(this.name, this.age);
                }
            };
        };

        // =========== 简化 =============
        const getUserInfo = (id = 1) => {
            // ... Ajax

            const name = 'xiaoming';
            const age = 10;

            return {
                name,
                age,
                say() {
                    console.log(this.name, this.age);
                }
            };
        };

二、属性名表达式
        const key = 'age';
        const obj = {
            name: '小明',
            [key]: 15
        }

        // 在属性名中，使用 []，可以将一个表达式返回结果放在里面作为属性名

*/