//an example use Default
#[cfg(test)]
mod about_default_derive {
    #[derive(Debug, Default)]
    struct CQueue {
        p: Vec<i32>,
        q: Vec<i32>,
    }

    impl CQueue {
        fn _new() -> Self {
            Default::default()
        }

        fn _append_tail(&mut self, value: i32) {
            self.p.push(value);
        }

        fn _delete_head(&mut self) -> i32 {
            match self.q.pop() {
                Some(val) => val,
                None => {
                    while !self.p.is_empty() {
                        self.q.push(self.p.pop().unwrap());
                    }
                    self.q.pop().unwrap_or(-1)
                }
            }
        }
    }
}
