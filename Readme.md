### 
- Nội dung chính trong buổi 2 :
  + Props và cách truyền prop giữa các file ( các component) : chuyển sang dùng khái niệm component cho gần gũi với react 
  + State : làm việc với state ( trạng thái) trong react qua hook useState()

  *Props

- Khái niệm : 
    + Props là viết tắt của properties( thuộc tính). Props là 1 đối tương(object, {}) có thể nhận về tất cả các kiểu dữ liệu của js
    (number, string, boolean, object, undefine, null, function, ....)
    + Trong React thì props có thể được truyền từ cpn cha sang cpn con hoặc ngược lại ( trường hợp truyền từ con sang cha 
    sẽ phải dùng 1 hàm callback để truyền)
- Cách truyền props giữa các component với nhau 
    + dạng truyền : tại file định nghĩa cpn cha, tạo propsName (tên tuỳ chọn) = {value} ( giá trị truyền vào tên đấy) sẽ được đặt 
    tại cpn con trong cpn cha đấy
    + tại file định nghĩa của cpn con, tiến hành hứng props truyền từ cha bằng cú pháp props.name với name === propsName 
    được đặt ở cpn cha

  *State( trạng thái) và hook useState() được dùng để kiểm soát trạng thái trong ứng dụng

- Ví dụ : khi đăng nhập fb thành công thì sẽ có 1 hộp thoại hỏi xem ta có muốn lưu lại thông tin đăng nhập hay không, lúc này
trạng thái mặc định của hộp thoại trên là false (không lưu lại) nhưng ta hoàn toàn có thể thay đổi trạng lưu thông tin kia
thành true để fb ghi nhớ thông tin đăng nhập và không yêu cầu chúng ta nhập lại trong các lần sử dụng tiếp theo

- Khái niệm : useState() là 1 đối tương cùa react, đối tương này đc sử dụng để quản lí trạng thái trong ứng dụng 
- Cú pháp : const [stateName, setStateName] = useState(giá trị khởi tạo ban đầu)
*** note : giá trị khởi tạo ban đầu có thể nhận là tất cả cac kiểu dữ liệu hiện có trong react 
ví dụ : để hứng các giá trị trong ô input nhập, chúng ta hoàn toàn có thể tạo 1 state để làm việc này

  const [email, setEmail] = useState('')