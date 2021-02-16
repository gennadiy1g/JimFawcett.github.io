// dispatch
#![allow(dead_code)]

trait Draw {
    fn draw(&self);
}

#[derive(Debug)]
struct Point { x:i32, y:i32 }
type Corner = Point;
#[derive(Debug)]
struct Rect { ll:Corner, ur:Corner }
impl Draw for Rect {
    fn draw(&self) {
        print!("\n  drawing Rect:\n  {:?}", &self);
    }
}
#[derive(Debug)]
struct Circle { orig:Point, rad:i32 }
impl Draw for Circle {
    fn draw(&self) {
        print!("\n  drawing Circle:\n  {:?}", &self);
    }
}
#[derive(Debug)]
struct TextBox { region:Rect, text:String }
impl Draw for TextBox {
    fn draw(&self) {
        print!("\n  drawing TextBox:\n  {:?}", &self);
    }
}

fn do_draw(item:&dyn Draw) {
    item.draw();
}

fn main() {

    print!("\n  -- static dispatch --");
    let r = Rect { ll:Corner {x:1,y:0}, ur:Corner {x:2,y:5} };
    r.draw();
    print!("\n  -- dynamic dispatch --");
    do_draw(&r);
    print!("\n  -- dynamic dispatch of draw_list --");
    let mut draw_list = Vec::<&dyn Draw>::new();
    let r1 = Rect{ ll:Corner {x:42, y:-42}, ur:Corner {x:-13, y:14} };
    let r2 = Rect{ ll:Corner {x:81, y:53}, ur:Corner {x:35, y:36} };
    let c1 = Circle{ orig:Point{x:5,y:19}, rad:3 };
    let t1 = TextBox{ region:Rect{ll:Corner{x:20,y:30}, ur:Corner{x:40, y:50}}, text:"some text".to_string()};
    draw_list.push(&r1);
    draw_list.push(&r2);
    draw_list.push(&c1);
    draw_list.push(&t1);
    for item in draw_list {
        do_draw(item);
    }
    print!("\n\n  That's all Folks!\n\n");
}
