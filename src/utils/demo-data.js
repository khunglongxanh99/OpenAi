export const COURSE_DATA_TEST = [
    {
        id:1,
        name: 'Python là gì? Tại sao nên chọn Python?',
        imageSrc: "https://user-images.githubusercontent.com/76729908/131646211-d56b77ac-83f1-4dd2-b55c-e3f1e0ba4e49.png",
        meta:"Python là một ngôn ngữ lập trình cấp cao và dễ tiếp cận hơn",
        content:`<a title="Chuyên mục Python" href="https://quantrimang.com/python">Python</a> là ngôn ngữ lập trình hướng đối tượng, cấp cao, mạnh mẽ, được tạo ra bởi Guido van Rossum. Nó dễ dàng để tìm hiểu và đang nổi lên như một trong những ngôn ngữ lập trình nhập môn tốt nhất cho người lần đầu tiếp xúc với ngôn ngữ lập trình. Python hoàn toàn tạo kiểu động và sử dụng cơ chế cấp phát bộ nhớ tự động. Python có <a title="Cấu trúc dữ liệu và giải thuật" href="https://quantrimang.com/cau-truc-du-lieu-va-giai-thuat">cấu trúc dữ liệu</a> cấp cao mạnh mẽ và cách tiếp cận đơn giản nhưng hiệu quả đối với lập trình hướng đối tượng. Cú pháp lệnh của Python là điểm cộng vô cùng lớn vì sự rõ ràng, dễ hiểu và cách gõ linh động làm cho nó nhanh chóng trở thành một ngôn ngữ lý tưởng để viết script và phát triển ứng dụng trong nhiều lĩnh vực, ở hầu hết các nền tảng.

        Hôm nay, chúng ta sẽ cùng <a href="https://quantrimang.com/python">tìm hiểu về Python</a>, những ưu điểm và khả năng của ngôn ngữ lập trình này nhé.
        <h2>Tại sao lại có tên là Python?</h2>
        Ồ, Python không phải được đặt theo tên của con rắn thần Python trong thần thoại Hy Lạp đâu. Rossum là fan của một sê-ri chương trình hài cuối những năm 1970, và cái tên “Python” được lấy từ tên một phần trong sê-ri đó “Monty Python’s Flying Circus”.
        <h2>Các phiên bản Python đã phát hành</h2>
        <table border="1">
        <thead>
        <tr>
        <th>Phiên bản</th>
        <th>Ngày phát hành</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Python 1.0 (bản phát hành chuẩn đầu tiên)
        Python 1.6 (Phiên bản 1.x cuối cùng)</td>
        <td>01/1994
        05/09/2000</td>
        </tr>
        <tr>
        <td>Python 2.0 (Giới thiệu list comprehension)
        Python 2.7 (Phiên bản 2.x cuối cùng)</td>
        <td>16/10/2000
        03/07/2010</td>
        </tr>
        <tr>
        <td>Python 3.0 (Loại bỏ cấu trúc và mô-đun trùng lặp)
        Python 3.8.5 (Bản mới nhất tính đến thời điểm cập nhật bài)</td>
        <td>03/12/2008
        20/07/2020</td>
        </tr>
        </tbody>
        </table>
        `,
    },
    {
        id:2,
        name: 'Lệnh if, if...else, if...elif...else trong Python',
        imageSrc: "https://user-images.githubusercontent.com/76729908/131646211-d56b77ac-83f1-4dd2-b55c-e3f1e0ba4e49.png",
        meta:"Ở đây, chương trình đánh giá điều kiện và sẽ thực hiện các lệnh khi điều kiện là True.",
        content:`<h2 id="mcetoc_1bsaat9rf0">Cấu trúc lệnh if trong Python</h2>
        <div class="codebar"></div>
        <pre id="pre0" class="prettyprint prettyprinted"><code><span class="kwd">if</span> <span class="pun">đ</span><span class="pln">i</span><span class="pun">ề</span><span class="pln">u ki</span><span class="pun">ệ</span><span class="pln">n</span></code>
        
        <code><span class="pln">   kh</span><span class="pun">ố</span><span class="pln">i l</span><span class="pun">ệ</span><span class="pln">nh</span></code></pre>
        Ở đây, chương trình đánh giá <em>điều kiện</em> và sẽ thực hiện các<em> lệnh</em> khi <em>điều kiện</em> là True. Nếu <em>điều kiện </em>False thì <em>lệnh</em> sẽ không được thực hiện.
        
        Trong Python, khối lệnh của lệnh <em>if </em>được viết thụt lề vào trong. Khối lệnh của <em>if</em> bắt đầu với một khoảng thụt lề và dòng không thụt lề đầu tiên sẽ được hiểu là kết thúc lệnh <em>if</em>.
        
        <strong>Sơ đồ lệnh if trong Python</strong>
        
        <img class="lazy lightbox loaded" src="https://st.quantrimang.com/photos/image/2017/10/13/Python-if-so-do.jpg" alt="Sơ đồ lệnh if trong Python" width="227" height="235" data-src="https://st.quantrimang.com/photos/image/2017/10/13/Python-if-so-do.jpg" data-i="0" data-was-processed="true" />
        <div id="articleads2" class="adbox in-article adsense"></div>
        <strong>Ví dụ 1:</strong>
        <div class="codebar"></div>
        <pre id="pre1" class="prettyprint prettyprinted"><code><span class="com"># Nếu là số dương ta sẽ in một thông điệp thích hợp</span></code></pre>
        <div class="codebar"></div>
        <pre id="pre2" class="prettyprint prettyprinted"><code><span class="pln">num </span><span class="pun">=</span> <span class="lit">3</span></code>
        <code><span class="kwd">if</span><span class="pln"> num </span><span class="pun">&gt;</span> <span class="lit">0</span><span class="pun">:</span></code>
        <code>   <span class="kwd">print</span><span class="pun">(</span><span class="pln">num</span><span class="pun">,</span> <span class="str">"là số dương."</span><span class="pun">)</span></code>
        <code><span class="kwd">print</span><span class="pun">(</span><span class="str">"Thông điệp này luôn được in."</span><span class="pun">)</span></code>
        
        <code><span class="pln">num </span><span class="pun">=</span> <span class="pun">-</span><span class="lit">1</span></code>
        <code><span class="kwd">if</span><span class="pln"> num </span><span class="pun">&gt;</span> <span class="lit">0</span><span class="pun">:</span></code>
        <code>   <span class="kwd">print</span><span class="pun">(</span><span class="pln">num</span><span class="pun">,</span> <span class="str">"là số dương."</span><span class="pun">)</span></code>
        <code><span class="kwd">print</span><span class="pun">(</span><span class="str">"Thông điệp này cũng luôn được in."</span><span class="pun">)</span></code></pre>
        Kết quả đầu ra của chương trình trên:
        <div class="codebar"></div>
        <pre id="pre3" class="prettyprint prettyprinted"><code><span class="lit">3</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> s</span><span class="pun">ố</span><span class="pln"> d</span><span class="pun">ươ</span><span class="pln">ng</span><span class="pun">.</span></code>
        <code><span class="typ">Th</span><span class="pun">ô</span><span class="pln">ng </span><span class="pun">đ</span><span class="pln">i</span><span class="pun">ệ</span><span class="pln">p n</span><span class="pun">à</span><span class="pln">y lu</span><span class="pun">ô</span><span class="pln">n </span><span class="pun">đượ</span><span class="pln">c </span><span class="kwd">in</span><span class="pun">.</span></code>
        <code><span class="typ">Th</span><span class="pun">ô</span><span class="pln">ng </span><span class="pun">đ</span><span class="pln">i</span><span class="pun">ệ</span><span class="pln">p n</span><span class="pun">à</span><span class="pln">y c</span><span class="pun">ũ</span><span class="pln">ng lu</span><span class="pun">ô</span><span class="pln">n </span><span class="pun">đượ</span><span class="pln">c </span><span class="kwd">in</span><span class="pun">.</span></code></pre>
        Trong ví dụ trên, num &gt; 0 là điều kiện, khối lệnh của if được thực thi khi thỏa mãn điều kiện. Khi num bằng 3, kiểm tra điều kiện, thấy đúng, khối lệnh của if được thực thi. Khi num bằng -1, không khỏa mãn điều kiện, khối lệnh của if bị bỏ qua và thực hiện lệnh print() cuối cùng.
        
        Chú ý kỹ hơn một chút, bạn sẽ thấy rằng lệnh print() không được viết thụt lề, điều này nói lên rằng, print() nằm ngoài khối lệnh if, nên nó sẽ được thực hiện, bất kể điều kiện là gì.
        <h2 id="mcetoc_1bsaat9rf3">Lệnh if...else</h2>
        <strong>Cấu trúc lệnh if...else</strong>
        <div class="codebar"></div>
        <pre id="pre4" class="prettyprint prettyprinted"><code><span class="kwd">if</span> <span class="pun">đ</span><span class="pln">i</span><span class="pun">ề</span><span class="pln">u ki</span><span class="pun">ệ</span><span class="pln">n</span><span class="pun">:</span></code>
        <code>    <span class="typ">Kh</span><span class="pun">ố</span><span class="pln">i l</span><span class="pun">ệ</span><span class="pln">nh c</span><span class="pun">ủ</span><span class="pln">a </span><span class="kwd">if</span></code>
        <code><span class="kwd">else</span><span class="pun">:</span></code>
        <code>    <span class="typ">Kh</span><span class="pun">ố</span><span class="pln">i l</span><span class="pun">ệ</span><span class="pln">nh c</span><span class="pun">ủ</span><span class="pln">a </span><span class="kwd">else</span></code></pre>
        Lệnh if...else kiểm tra điều kiện và thực thi khối lệnh if nếu điều kiện đúng. Nếu điều kiện sai, khối lệnh của else sẽ được thực hiện. Thụt đầu dòng được sử dụng để tách các khối lệnh.
        
        <strong>Sơ đồ lệnh if...else</strong>
        
        <img class="lazy lightbox loaded" src="https://st.quantrimang.com/photos/image/2017/10/13/Python-if-else-so-do.jpg" alt="Sơ đồ lệnh if...else" width="279" height="241" data-src="https://st.quantrimang.com/photos/image/2017/10/13/Python-if-else-so-do.jpg" data-i="1" data-was-processed="true" />
        <div id="articleads3" class="adbox in-article"></div>
        <strong>Ví dụ 2:</strong>
        <div class="codebar"></div>
        <pre id="pre5" class="prettyprint prettyprinted"><code><span class="com"># Kiem tra xem so am hay duong</span></code>
        <code><span class="com"># Va hien thi thong bao phu hop</span></code>
        
        <code><span class="pln">num </span><span class="pun">=</span> <span class="lit">3</span></code>
        
        <code><span class="kwd">if</span><span class="pln"> num </span><span class="pun">&gt;=</span> <span class="lit">0</span><span class="pun">:</span></code>
        <code>   <span class="kwd">print</span><span class="pun">(</span><span class="str">"So duong hoac bang 0"</span><span class="pun">)</span></code>
        <code><span class="kwd">else</span><span class="pun">:</span></code>
        <code>   <span class="kwd">print</span><span class="pun">(</span><span class="str">"So am"</span><span class="pun">)</span></code>
        
        <code><span class="pln">num1</span><span class="pun">=-</span><span class="lit">1</span></code>
        <code>
        <span class="kwd">if</span><span class="pln"> num1 </span><span class="pun">&gt;=</span> <span class="lit">0</span><span class="pun">:</span></code>
        <code>   <span class="kwd">print</span><span class="pun">(</span><span class="str">"So duong hoac bang 0"</span><span class="pun">)</span></code>
        <code><span class="kwd">else</span><span class="pun">:</span></code>
        <code>   <span class="kwd">print</span><span class="pun">(</span><span class="str">"So am"</span><span class="pun">)</span></code></pre>
        Trong ví dụ 2, ta kiểm tra 2 biến là num và num1. Khi num bằng 3, thỏa mãn điều kiện num&gt;=0 nên khối lệnh của if được thực hiện. num1=-1 không thỏa mãn điều kiện num1&gt;=0 nên khối lệnh của else được thực hiện và bỏ qua khối lệnh của if.
        
        Kết quả sẽ của lệnh trên sẽ in ra màn hình hai dòng: dòng trên là kết quả kiểm tra biến num và dòng dưới là biến num1.
        <div class="codebar"></div>
        <pre id="pre6" class="prettyprint prettyprinted"><code><span class="typ">So</span><span class="pln"> duong hoac bang </span><span class="lit">0</span></code>
        <code><span class="typ">So</span><span class="pln"> am</span></code></pre>
        <h2 id="mcetoc_1bsabitbq4">Lệnh if...elif...else trong Python</h2>
        <strong>Cấu trúc lệnh if...elif...else</strong>
        <div class="codebar"></div>
        <pre id="pre7" class="prettyprint prettyprinted"><code><span class="kwd">if</span> <span class="pun">đ</span><span class="pln">i</span><span class="pun">ề</span><span class="pln">u ki</span><span class="pun">ệ</span><span class="pln">n</span><span class="pun">:</span></code>
        <code> <span class="typ">Kh</span><span class="pun">ố</span><span class="pln">i l</span><span class="pun">ệ</span><span class="pln">nh c</span><span class="pun">ủ</span><span class="pln">a </span><span class="kwd">if</span></code>
        <code><span class="kwd">elif</span><span class="pln"> test expression</span><span class="pun">:</span></code>
        <code> <span class="typ">Kh</span><span class="pun">ố</span><span class="pln">i l</span><span class="pun">ệ</span><span class="pln">nh c</span><span class="pun">ủ</span><span class="pln">a </span><span class="kwd">elif</span></code>
        <code><span class="kwd">else</span><span class="pun">:</span> </code>
        <code> <span class="typ">Kh</span><span class="pun">ố</span><span class="pln">i l</span><span class="pun">ệ</span><span class="pln">nh c</span><span class="pun">ủ</span><span class="pln">a </span><span class="kwd">else</span></code></pre>
        elif là viết gọn của else if, nó cho phép chúng ta kiểm tra nhiều điều kiện.
        
        Nếu điều kiện là sai, nó sẽ kiểm tra điều kiện của khối elif tiếp theo và cứ như vậy cho đến hết.
        
        Nếu tất cả các điều kiện đều sai nó sẽ thực thi khối lệnh của else.
        
        Chỉ một khối lệnh trong if...elif...else được thực hiện theo điều kiện.
        
        Có thể không có hoặc có nhiều elif, phần else là tùy chọn.
        
        <strong>Sơ đồ của lệnh if...elif...else</strong>
        
        <img class="lazy lightbox loaded" src="https://st.quantrimang.com/photos/image/2017/10/13/Python-if-elif-else-so-do.jpg" alt="Sơ đồ lệnh if...elif...else" width="412" height="389" data-src="https://st.quantrimang.com/photos/image/2017/10/13/Python-if-elif-else-so-do.jpg" data-i="2" data-was-processed="true" />
        <div class="adbox adsense in-article"></div>
        <strong>Ví dụ 3:</strong>
        <div class="codebar"></div>
        <pre id="pre8" class="prettyprint prettyprinted"><code><span class="go"><span class="pln">x </span><span class="pun">=</span> <span class="kwd">int</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">"Nhap mot so: "</span><span class="pun">))</span>
        <span class="kwd">if</span><span class="pln"> x </span><span class="pun">&lt;</span> <span class="lit">0</span><span class="pun">:</span>
        <span class="pln">   x </span><span class="pun">=</span> <span class="lit">0</span>
           <span class="kwd">print</span><span class="pun">(</span><span class="str">'So am'</span><span class="pun">)</span>
        <span class="kwd">elif</span><span class="pln"> x </span><span class="pun">==</span> <span class="lit">0</span><span class="pun">:</span>
           <span class="kwd">print</span><span class="pun">(</span><span class="str">'So 0'</span><span class="pun">)</span>
        <span class="kwd">elif</span><span class="pln"> x </span><span class="pun">==</span> <span class="lit">1</span><span class="pun">:</span>
           <span class="kwd">print</span><span class="pun">(</span><span class="str">'So 1'</span><span class="pun">)</span>
        <span class="kwd">else</span><span class="pun">:</span>
           <span class="kwd">print</span><span class="pun">(</span><span class="str">'So duong'</span><span class="pun">)</span></span></code></pre>
        Kết quả đầu ra:
        
        <img class="lazy lightbox loaded" src="https://st.quantrimang.com/photos/image/2017/10/13/ket-qua-chay-lenh-if-python.png" alt="Kết quả đầu ra của lệnh if trên Python" width="650" height="225" data-src="https://st.quantrimang.com/photos/image/2017/10/13/ket-qua-chay-lenh-if-python.png" data-i="3" data-was-processed="true" />
        
        Nếu x là số âm thì in ra màn hình: "So am".
        
        Nếu x = 0 thì sẽ in: "So 0".
        
        Nếu x = 1 thì sẽ in: "So 1".
        
        Nếu cả 3 điều kiện trên đều sai thì in: "So duong".
        
        Lệnh if ... elif ... elif ... là sự thay thế cho câu lệnh switch hay case trong các ngôn ngữ lập trình khác.
        <h2 id="mcetoc_1bsafs9ld0">Lệnh if lồng nhau trong Python</h2>
        Bạn có thể viết lệnh if...elif...else trong một khối lệnh if...elif...else khác, và tạo thành lệnh if lồng nhau. Không giới hạn số lệnh được lồng vào lệnh khác. Thụt đầu dòng là cách duy nhất để nhận diện mức độ lồng, do đó nó có thể gây rối, nhầm lẫn. Bạn nên hạn chế sử dụng nếu có thể.
        
        <strong>Ví dụ 4:</strong>
        <div class="codebar"></div>
        <pre id="pre9" class="prettyprint prettyprinted"><code><span class="com"># Trong code này, nhập vào một số</span></code>
        <code><span class="com"># Kiểm tra xem số âm hay dương</span></code>
        <code><span class="com"># hay bằng không và hiển thị</span></code>
        <code><span class="com"># thông báo thích hợp</span></code>
        <code><span class="com"># Sử dụng hàm if lồng nhau</span></code>
        
        <code><span class="pln">num </span><span class="pun">=</span> <span class="kwd">float</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">"Nhập một số: "</span><span class="pun">))</span></code>
        <code><span class="kwd">if</span><span class="pln"> num </span><span class="pun">&gt;=</span> <span class="lit">0</span><span class="pun">:</span></code>
        <code>   <span class="kwd">if</span><span class="pln"> num </span><span class="pun">==</span> <span class="lit">0</span><span class="pun">:</span></code>
        <code>       <span class="kwd">print</span><span class="pun">(</span><span class="str">"Số Không"</span><span class="pun">)</span></code>
        <code>   <span class="kwd">else</span><span class="pun">:</span></code>
        <code>       <span class="kwd">print</span><span class="pun">(</span><span class="str">"Số dương"</span><span class="pun">)</span></code>
        <code><span class="kwd">else</span><span class="pun">:</span></code>
        <code>   <span class="kwd">print</span><span class="pun">(</span><span class="str">"Số âm"</span><span class="pun">)</span></code></pre>
        Kết quả 1:
        <div class="codebar"></div>
        <pre id="pre10" class="prettyprint prettyprinted"><code><span class="typ">Nh</span><span class="pun">ậ</span><span class="pln">p m</span><span class="pun">ộ</span><span class="pln">t s</span><span class="pun">ố:</span> <span class="lit">10</span></code>
        
        <code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> d</span><span class="pun">ươ</span><span class="pln">ng</span></code></pre>
        Kết quả 2:
        <div class="codebar"></div>
        <pre id="pre11" class="prettyprint prettyprinted"><code><span class="typ">Nh</span><span class="pun">ậ</span><span class="pln">p m</span><span class="pun">ộ</span><span class="pln">t s</span><span class="pun">ố:</span> <span class="pun">-</span><span class="lit">5</span></code>
        
        <code><span class="pln">S</span><span class="pun">ố</span> <span class="pun">â</span><span class="pln">m</span></code></pre>
        Kết quả 3:
        <div class="codebar"></div>
        <pre id="pre12" class="prettyprint prettyprinted"><code><span class="typ">Nh</span><span class="pun">ậ</span><span class="pln">p m</span><span class="pun">ộ</span><span class="pln">t s</span><span class="pun">ố:</span> <span class="lit">0</span></code>
        
        <code><span class="pln">S</span><span class="pun">ố</span> <span class="typ">Kh</span><span class="pun">ô</span><span class="pln">ng</span></code></pre>`,
    },
    {
        id:3,
        name: 'Vòng lặp for trong Python',
        imageSrc: "https://user-images.githubusercontent.com/76729908/131646211-d56b77ac-83f1-4dd2-b55c-e3f1e0ba4e49.png",
        meta:` Đọc bài viết này để chắc chắn là bạn không bỏ qua những thông tin hữu ích về nó nhé.`,
        content:`Trong phần trước chúng ta đã tìm hiểu khá chi tiết về lệnh if trong <a href="https://quantrimang.com/python">Python</a>. Đọc bài viết này để chắc chắn là bạn không bỏ qua những thông tin hữu ích về nó nhé.

        Bài này, chúng ta sẽ biết thêm về vòng lặp for trong <a href="https://quantrimang.com/python-la-gi-tai-sao-nen-chon-python-140518">ngôn ngữ lập trình Python</a> cũng như các biến thể của nó, cách sử dụng for để lặp lại một chuỗi các phần tử trong Python như list, string hoặc các đối tượng lặp khác.
        <h2>Cú pháp của for trong Python</h2>
        <div class="codebar"></div>
        <pre id="pre0" class="language-python prettyprint prettyprinted"><code><span class="kwd">for</span><span class="pln"> bien_lap </span><span class="kwd">in</span><span class="pln"> chuoi_lap</span><span class="pun">:</span>
        <span class="typ">Kh</span><span class="pun">ố</span><span class="pln">i l</span><span class="pun">ệ</span><span class="pln">nh c</span><span class="pun">ủ</span><span class="pln">a </span><span class="kwd">for</span></code></pre>
        Trong cú pháp trên, chuoi_lap là chuỗi cần lặp, bien_lap là biến nhận giá trị của từng mục bên trong chuoi_lap trên mỗi lần lặp. Vòng lặp sẽ tiếp tục cho đến khi nó lặp tới mục cuối cùng trong chuỗi.
        
        Khối lệnh của for được thụt lề để phân biệt với phần còn lại của code.
        <div id="articleads" class="adbox adsense in-article">
        <div id="v-quantrimang-v1">
        <div id="_vdo_ads_player_ai_4751"></div>
        </div>
        </div>
        <strong>Ví dụ 1:</strong>
        <div class="codebar"></div>
        <pre id="pre1" class="language-python prettyprint prettyprinted"><code><span class="com">#Lặp chữ cái trong quantrimang</span>
        <span class="kwd">for</span><span class="pln"> chu </span><span class="kwd">in</span> <span class="str">'quantrimang'</span><span class="pun">:</span>
            <span class="kwd">print</span><span class="pun">(</span><span class="str">'Chữ cái hiện tại:'</span><span class="pun">,</span><span class="pln"> chu</span><span class="pun">)</span>
        
        <span class="com">#Lặp từ trong chuỗi</span><span class="pln">
        chuoi </span><span class="pun">=</span> <span class="pun">[</span><span class="str">'bố'</span><span class="pun">,</span><span class="str">'mẹ'</span><span class="pun">,</span><span class="str">'em'</span><span class="pun">]</span>
        <span class="kwd">for</span><span class="pln"> tu </span><span class="kwd">in</span><span class="pln"> chuoi</span><span class="pun">:</span>
            <span class="kwd">print</span><span class="pun">(</span><span class="str">'Anh yêu'</span><span class="pun">,</span><span class="pln"> tu</span><span class="pun">)</span></code></pre>
        Ta có kết quả đầu ra như sau:
        <div class="codebar"></div>
        <pre id="pre2" class="language-python prettyprint prettyprinted"><code><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> q
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> u
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> a
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> n
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> t
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> r
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> i
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> m
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> a
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> n
        </span><span class="typ">Ch</span><span class="pun">ữ</span><span class="pln"> c</span><span class="pun">á</span><span class="pln">i hi</span><span class="pun">ệ</span><span class="pln">n t</span><span class="pun">ạ</span><span class="pln">i</span><span class="pun">:</span><span class="pln"> g
        </span><span class="typ">Anh</span><span class="pln"> y</span><span class="pun">ê</span><span class="pln">u b</span><span class="pun">ố</span>
        <span class="typ">Anh</span><span class="pln"> y</span><span class="pun">ê</span><span class="pln">u m</span><span class="pun">ẹ</span>
        <span class="typ">Anh</span><span class="pln"> y</span><span class="pun">ê</span><span class="pln">u em</span></code></pre>
        <strong>Ví dụ 2:</strong>
        <div class="codebar"></div>
        <pre id="pre3" class="language-python prettyprint prettyprinted"><code><span class="com"># Tính tổng tất cả các số trong danh sách A</span>
        <span class="com"># Danh sách A</span><span class="pln">
        A </span><span class="pun">=</span> <span class="pun">[</span><span class="lit">1</span><span class="pun">,</span> <span class="lit">3</span><span class="pun">,</span> <span class="lit">5</span><span class="pun">,</span> <span class="lit">9</span><span class="pun">,</span> <span class="lit">11</span><span class="pun">,</span> <span class="lit">2</span><span class="pun">,</span> <span class="lit">6</span><span class="pun">,</span> <span class="lit">8</span><span class="pun">,</span> <span class="lit">10</span><span class="pun">]</span>
        <span class="com"># Biến để lưu trữ tổng các số là tong, gán giá trị ban đầu bằng 0</span><span class="pln">
        tong </span><span class="pun">=</span> <span class="lit">0</span>
        <span class="com"># Vòng lặp for, a là biến lặp</span>
        <span class="kwd">for</span><span class="pln"> a </span><span class="kwd">in</span><span class="pln"> A</span><span class="pun">:</span><span class="pln">
             tong </span><span class="pun">=</span><span class="pln"> tong</span><span class="pun">+</span><span class="pln">a
        </span><span class="com"># Đầu ra: Tổng các số là 55</span>
        <span class="kwd">print</span><span class="pun">(</span><span class="str">"Tổng các số là"</span><span class="pun">,</span><span class="pln"> tong</span><span class="pun">)</span></code></pre>
        Khi chạy đoạn code trên, bạn sẽ nhận được kết quả là:
        <div class="codebar"></div>
        <pre id="pre4" class="language-python prettyprint prettyprinted"><code><span class="pln">T</span><span class="pun">ổ</span><span class="pln">ng c</span><span class="pun">á</span><span class="pln">c s</span><span class="pun">ố</span><span class="pln"> l</span><span class="pun">à</span> <span class="lit">55</span></code></pre>
        <h2>Hàm range()</h2>
        Bạn có thể sử dụng hàm range() để tạo ra một dãy số. Ví dụ, range(100) sẽ tạo một dãy số từ 0 đến 99 (100 số).
        <div id="articleads2" class="adbox in-article adsense"></div>
        Hàm range(số bắt đầu, số kết thúc, khoảng cách giữa hai số) được sử dụng để tạo dãy số tùy chỉnh. Nếu không đặt khoảng cách giữa hai số thì Python sẽ hiểu mặc định nó bằng 1.
        
        Ví dụ: Viết 100 lần "Anh xin lỗi", ta sẽ cho biến i lặp từ 0 đến 100 như dưới đây:
        <div class="codebar"></div>
        <pre id="pre5" class="language-python prettyprint prettyprinted"><code><span class="kwd">for</span><span class="pln"> i </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="lit">100</span><span class="pun">):</span>
            <span class="kwd">print</span> <span class="pun">(</span><span class="str">"Anh xin lỗi"</span><span class="pun">)</span>
        <span class="kwd">print</span><span class="pun">(</span><span class="str">"Em ơi, anh chép xong ồi nè!"</span><span class="pun">)</span></code></pre>
        Hàm range() không lưu tất cả các giá trị trong bộ nhớ mà nó lưu giá trị bắt đầu, giá trị kết thúc và khoảng cách giữa hai số từ đó tạo ra số tiếp theo trong dãy.
        
        Để range() xuất ra tất cả các giá trị, bạn cần sử dụng đến hàm list() giống như ví dụ dưới đây:
        <div class="codebar"></div>
        <pre id="pre6" class="language-python prettyprint prettyprinted"><code><span class="com">#Lệnh 1</span>
        <span class="kwd">print</span><span class="pun">(</span><span class="pln">range</span><span class="pun">(</span><span class="lit">9</span><span class="pun">))</span>
        <span class="com">#Lệnh 2</span>
        <span class="kwd">print</span><span class="pun">(</span><span class="pln">list</span><span class="pun">(</span><span class="pln">range</span><span class="pun">(</span><span class="lit">9</span><span class="pun">)))</span>
        <span class="com">#Lệnh 3</span>
        <span class="kwd">print</span><span class="pun">(</span><span class="pln">list</span><span class="pun">(</span><span class="pln">range</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span> <span class="lit">5</span><span class="pun">)))</span>
        <span class="com">#Lệnh 4</span>
        <span class="kwd">print</span><span class="pun">(</span><span class="pln">list</span><span class="pun">(</span><span class="pln">range</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span> <span class="lit">15</span><span class="pun">,</span> <span class="lit">5</span><span class="pun">)))</span></code></pre>
        Chúng ta sẽ có đầu ra như sau:
        <div class="codebar"></div>
        <pre id="pre7" class="language-python prettyprint prettyprinted"><code><span class="pln">range</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span> <span class="lit">9</span><span class="pun">)</span>
        <span class="pun">[</span><span class="lit">0</span><span class="pun">,</span> <span class="lit">1</span><span class="pun">,</span> <span class="lit">2</span><span class="pun">,</span> <span class="lit">3</span><span class="pun">,</span> <span class="lit">4</span><span class="pun">,</span> <span class="lit">5</span><span class="pun">,</span> <span class="lit">6</span><span class="pun">,</span> <span class="lit">7</span><span class="pun">,</span> <span class="lit">8</span><span class="pun">]</span>
        <span class="pun">[</span><span class="lit">2</span><span class="pun">,</span> <span class="lit">3</span><span class="pun">,</span> <span class="lit">4</span><span class="pun">]</span>
        <span class="pun">[</span><span class="lit">0</span><span class="pun">,</span> <span class="lit">5</span><span class="pun">,</span> <span class="lit">10</span><span class="pun">]</span></code></pre>
        Mỗi dòng tương ứng với Lệnh 1, 2, 3, 4 ở trên.
        
        Hàm range() có thể sử dụng kết hợp với len() để lặp qua một dãy sử dụng index, như ví dụ dưới đây:
        
        <strong>Ví dụ 3:</strong>
        <div class="codebar"></div>
        <pre id="pre8" class="language-python prettyprint prettyprinted"><code><span class="pln">chuoi </span><span class="pun">=</span> <span class="pun">[</span><span class="str">'bố'</span><span class="pun">,</span><span class="str">'mẹ'</span><span class="pun">,</span><span class="str">'em'</span><span class="pun">]</span>
        
        <span class="kwd">for</span><span class="pln"> tu </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="pln">len</span><span class="pun">(</span><span class="pln">chuoi</span><span class="pun">)):</span>
            <span class="kwd">print</span><span class="pun">(</span><span class="str">"Anh yêu"</span><span class="pun">,</span><span class="pln">chuoi</span><span class="pun">[</span><span class="pln">tu</span><span class="pun">])</span></code></pre>
        Ta có kết quả đầu ra giống như ví dụ 1 bên trên:
        <div class="codebar"></div>
        <pre id="pre9" class="language-python prettyprint prettyprinted"><code><span class="typ">Anh</span><span class="pln"> y</span><span class="pun">ê</span><span class="pln">u b</span><span class="pun">ố</span>
        <span class="typ">Anh</span><span class="pln"> y</span><span class="pun">ê</span><span class="pln">u m</span><span class="pun">ẹ</span>
        <span class="typ">Anh</span><span class="pln"> y</span><span class="pun">ê</span><span class="pln">u em</span></code></pre>
        <h2>Kết hợp for với else</h2>
        <div id="articleads3" class="adbox in-article"></div>
        Trong bài trước bạn đã thấy cấu trúc if...else và if...elif...else. Else không chỉ kết hợp được với if mà trong vòng lặp for cũng có thể dùng được.
        
        Trong for, khối lệnh của else sẽ được thực thi khi các mục trong chuỗi đã được lặp hết.
        
        <strong>Ví dụ 4:</strong>
        <div class="codebar"></div>
        <pre id="pre10" class="language-python prettyprint prettyprinted"><code><span class="pln">B </span><span class="pun">=</span> <span class="pun">[</span><span class="lit">0</span><span class="pun">,</span> <span class="lit">2</span><span class="pun">,</span> <span class="lit">4</span><span class="pun">,</span> <span class="lit">5</span><span class="pun">]</span>
        
        <span class="kwd">for</span><span class="pln"> b </span><span class="kwd">in</span><span class="pln"> B</span><span class="pun">:</span>
            <span class="kwd">print</span><span class="pun">(</span><span class="pln">b</span><span class="pun">)</span>
        <span class="kwd">else</span><span class="pun">:</span>
            <span class="kwd">print</span><span class="pun">(</span><span class="str">"Đã hết số."</span><span class="pun">)</span></code></pre>
        ở đây, vòng lặp for sẽ in ra danh sách B cho đến khi hết các mục. Khi vòng lặp kết thúc nó thực thi khối lệnh của else và in. Ta có kết quả sau khi chạy code như sau:
        <div class="codebar"></div>
        <pre id="pre11" class="language-python prettyprint prettyprinted"><code><span class="lit">0</span>
        <span class="lit">2</span>
        <span class="lit">4</span>
        <span class="lit">5</span>
        <span class="pun">Đã</span><span class="pln"> h</span><span class="pun">ế</span><span class="pln">t s</span><span class="pun">ố.</span></code></pre>
        Lệnh break có thể được sử dụng để dừng vòng lặp for, lúc này phần else sẽ bị bỏ qua. Hay nói cách khác, phần else trong for sẽ chạy khi không có break nào được thực thi.
        
        <strong>Ví dụ 5:</strong>
        <div class="codebar"></div>
        <pre id="pre12" class="language-python prettyprint prettyprinted"><code><span class="com">#Lặp dãy từ 0 đến 10</span>
        <span class="kwd">for</span><span class="pln"> num </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="lit">10</span><span class="pun">):</span>
        <span class="com">#Lặp trên các thừa số của một số trong dãy</span>
           <span class="kwd">for</span><span class="pln"> i </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="pln">num</span><span class="pun">):</span> 
        <span class="com">#Xác định thừa số đầu tiên (phép chia có số dư bằng 0)</span>
              <span class="kwd">if</span><span class="pln"> num</span><span class="pun">%</span><span class="pln">i </span><span class="pun">==</span> <span class="lit">0</span><span class="pun">:</span><span class="pln"> 
                 j</span><span class="pun">=</span><span class="pln">num</span><span class="pun">/</span><span class="pln">i </span><span class="com">#Ước lượng thừa số thứ 2</span>
                 <span class="kwd">print</span> <span class="pun">(</span><span class="str">'%d bằng %d * %d'</span> <span class="pun">%</span> <span class="pun">(</span><span class="pln">num</span><span class="pun">,</span><span class="pln">i</span><span class="pun">,</span><span class="pln">j</span><span class="pun">))</span>
                 <span class="kwd">break</span> <span class="com">#Dừng vòng for hiện tại, chuyển đến số tiếp theo trong vòng for đầu tiên</span>
           <span class="kwd">else</span><span class="pun">:</span> <span class="com"># Phần else trong vòng lặp</span>
              <span class="kwd">print</span> <span class="pun">(</span><span class="pln">num</span><span class="pun">,</span> <span class="str">'là số nguyên tố'</span><span class="pun">)</span></code></pre>
        Code trên lặp các số trong dãy từ 0 đến 10, với mỗi số sẽ chạy vòng lặp kiểm tra xem có phải là số nguyên tố không, nếu phải thì in thông báo và dừng vòng lặp kiểm tra, chuyển qua số tiếp theo trong vòng lặp đầu tiên, nếu không phải số nguyên tố thì sẽ thực hiện khối lệnh else. Chạy code trên ta có kết quả như sau:
        <div class="codebar"></div>
        <pre id="pre13" class="language-python prettyprint prettyprinted"><code><span class="lit">0</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> s</span><span class="pun">ố</span><span class="pln"> nguy</span><span class="pun">ê</span><span class="pln">n t</span><span class="pun">ố</span>
        <span class="lit">1</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> s</span><span class="pun">ố</span><span class="pln"> nguy</span><span class="pun">ê</span><span class="pln">n t</span><span class="pun">ố</span>
        <span class="lit">2</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> s</span><span class="pun">ố</span><span class="pln"> nguy</span><span class="pun">ê</span><span class="pln">n t</span><span class="pun">ố</span>
        <span class="lit">3</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> s</span><span class="pun">ố</span><span class="pln"> nguy</span><span class="pun">ê</span><span class="pln">n t</span><span class="pun">ố</span>
        <span class="lit">4</span><span class="pln"> b</span><span class="pun">ằ</span><span class="pln">ng </span><span class="lit">2</span> <span class="pun">*</span> <span class="lit">2</span>
        <span class="lit">5</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> s</span><span class="pun">ố</span><span class="pln"> nguy</span><span class="pun">ê</span><span class="pln">n t</span><span class="pun">ố</span>
        <span class="lit">6</span><span class="pln"> b</span><span class="pun">ằ</span><span class="pln">ng </span><span class="lit">2</span> <span class="pun">*</span> <span class="lit">3</span>
        <span class="lit">7</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> s</span><span class="pun">ố</span><span class="pln"> nguy</span><span class="pun">ê</span><span class="pln">n t</span><span class="pun">ố</span>
        <span class="lit">8</span><span class="pln"> b</span><span class="pun">ằ</span><span class="pln">ng </span><span class="lit">2</span> <span class="pun">*</span> <span class="lit">4</span>
        <span class="lit">9</span><span class="pln"> b</span><span class="pun">ằ</span><span class="pln">ng </span><span class="lit">3</span> <span class="pun">*</span> <span class="lit">3</span></code></pre>`,
    },
    {
        id:4,
        name: 'Vòng lặp while trong Python',
        imageSrc: "https://user-images.githubusercontent.com/76729908/131646211-d56b77ac-83f1-4dd2-b55c-e3f1e0ba4e49.png",
        meta:`Vòng lặp while trong Python có tác dụng gì? Cú pháp và cách sử dụng vòng lặp while ra sao? `,
        content:`Vòng lặp while trong Python có tác dụng gì? Cú pháp và cách sử dụng vòng lặp while ra sao? Đó là những nội dung mà chúng ta sẽ tiếp cận trong <a href="https://quantrimang.com/python">bài học Python</a> này.

        Vòng lặp được sử dụng trong <a href="https://quantrimang.com/lap-trinh">lập trình</a> để lặp lại một đoạn code cụ thể, while cũng là một trong số đó. Trong Python, while được dùng để lặp lại một khối lệnh, đoạn code khi điều kiện kiểm tra là đúng. while dùng trong những trường hợp mà chúng ta không thể dự đoán trước được số lần cần lặp là bao nhiêu.
        <h2 id="mcetoc_1btdt4hft0">Cú pháp của <a href="https://quantrimang.com/vong-lap-while-trong-python-142407">while trong Python</a></h2>
        <div class="codebar"></div>
        <pre id="pre0" class="prettyprint prettyprinted"><code><span class="kwd">while</span> <span class="pun">đ</span><span class="pln">i</span><span class="pun">ề</span><span class="pln">u_ki</span><span class="pun">ệ</span><span class="pln">n_ki</span><span class="pun">ể</span><span class="pln">m_tra</span><span class="pun">:</span></code>
        <code>      <span class="typ">Kh</span><span class="pun">ố</span><span class="pln">i l</span><span class="pun">ệ</span><span class="pln">nh c</span><span class="pun">ủ</span><span class="pln">a </span><span class="kwd">while</span></code></pre>
        Trong vòng lặp while, <code>điều_kiện_kiểm_tra</code> sẽ được kiểm tra đầu tiên. Khối lệnh của vòng lặp chỉ được nạp vào nếu <code>điều_kiện_kiểm_tra</code> là True. Sau một lần lặp, <code>điều_kiện_kiểm_tra</code> sẽ được kiểm tra lại. Quá trình này sẽ tiếp tục cho đến khi <code>điều_kiện_kiểm_tra</code> là False. Trong Python mọi giá trị khác 0 đều là True, None và 0 được hiểu là False. Đặc điểm này của while có thể dẫn đến trường hợp là while có thể không chạy vì ngay lần lặp đầu tiên <code>điều_kiện_kiểm_tra</code> đã False. Khi đó, khối lệnh của while sẽ bị bỏ qua và phần code ngay sau đó sẽ được thực thi.
        <div id="articleads" class="adbox adsense in-article">
        <div id="v-quantrimang-v1">
        <div id="_vdo_ads_player_ai_4751"></div>
        </div>
        </div>
        <img class="lazy lightbox loaded" src="https://st.quantrimang.com/photos/image/2017/10/27/so-dong-vong-lap-while-python.jpg" alt="Sơ đồ vòng lặp while trong Python" width="219" height="345" data-src="https://st.quantrimang.com/photos/image/2017/10/27/so-dong-vong-lap-while-python.jpg" data-i="0" data-was-processed="true" />
        <em>Sơ đồ vòng lặp while trong Python</em>
        
        Giống như <a href="https://quantrimang.com/L%E1%BB%87nh%20if,%20if...else,%20if...elif...else%20trong%20Python">if</a> hay vòng lặp for, khối lệnh của while cũng được xác định thông qua thụt lề. Khối lệnh bắt đầu với thụt lề đầu tiên và kết thúc với dòng không thụt lề đầu tiên liền sau khối.
        
        <strong>Ví dụ 1:</strong>
        <div class="codebar"></div>
        <pre id="pre1" class="prettyprint prettyprinted"><code><span class="pln">count </span><span class="pun">=</span> <span class="lit">0</span></code>
        <code><span class="pln">n </span><span class="pun">=</span> <span class="lit">0</span></code>
        <code><span class="kwd">while</span> <span class="pun">(</span><span class="pln">count </span><span class="pun">&lt;</span> <span class="lit">8</span><span class="pun">):</span></code>
        <code>      <span class="kwd">print</span> <span class="pun">(</span><span class="str">'Số thứ'</span><span class="pun">,</span><span class="pln"> n</span><span class="pun">,</span><span class="str">' là:'</span><span class="pun">,</span><span class="pln"> count</span><span class="pun">)</span></code>
        <code><span class="pln">      n </span><span class="pun">=</span><span class="pln"> n </span><span class="pun">+</span> <span class="lit">1</span></code>
        <code><span class="pln">      count </span><span class="pun">=</span><span class="pln"> count </span><span class="pun">+</span> <span class="lit">1</span></code>
        <code><span class="kwd">print</span> <span class="pun">(</span><span class="str">"Hết rồi!"</span><span class="pun">)</span></code></pre>
        Với đoạn code này, ta sẽ tăng dần count và in giá trị của nó cho đến khi giá trị này không còn nhỏ hơn 8 nữa. Kết quả khi chạy lệnh trên ta có:
        <div id="articleads2" class="adbox in-article adsense"></div>
        <div class="codebar"></div>
        <pre id="pre2" class="prettyprint prettyprinted"><code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> th</span><span class="pun">ứ</span> <span class="lit">0</span><span class="pln"> l</span><span class="pun">à:</span> <span class="lit">0</span></code>
        <code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> th</span><span class="pun">ứ</span> <span class="lit">1</span><span class="pln"> l</span><span class="pun">à:</span> <span class="lit">1</span></code>
        <code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> th</span><span class="pun">ứ</span> <span class="lit">2</span><span class="pln"> l</span><span class="pun">à:</span> <span class="lit">2</span></code>
        <code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> th</span><span class="pun">ứ</span> <span class="lit">3</span><span class="pln"> l</span><span class="pun">à:</span> <span class="lit">3</span></code>
        <code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> th</span><span class="pun">ứ</span> <span class="lit">4</span><span class="pln"> l</span><span class="pun">à:</span> <span class="lit">4</span></code>
        <code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> th</span><span class="pun">ứ</span> <span class="lit">5</span><span class="pln"> l</span><span class="pun">à:</span> <span class="lit">5</span></code>
        <code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> th</span><span class="pun">ứ</span> <span class="lit">6</span><span class="pln"> l</span><span class="pun">à:</span> <span class="lit">6</span></code>
        <code><span class="pln">S</span><span class="pun">ố</span><span class="pln"> th</span><span class="pun">ứ</span> <span class="lit">7</span><span class="pln"> l</span><span class="pun">à:</span> <span class="lit">7</span></code>
        <code><span class="pln">H</span><span class="pun">ế</span><span class="pln">t r</span><span class="pun">ồ</span><span class="pln">i</span><span class="pun">!</span></code></pre>
        <strong>Ví dụ 2: Sử dụng while để tính tổng các số</strong>
        <div class="codebar"></div>
        <pre id="pre3" class="prettyprint prettyprinted"><code><span class="pln">n </span><span class="pun">=</span> <span class="kwd">int</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">"Nhập n: "</span><span class="pun">))</span> <span class="com">#Nhập số n tùy ý</span></code>
        <code><span class="pln">tong </span><span class="pun">=</span> <span class="lit">0</span> <span class="com">#khai báo và gán giá trị cho tong</span></code>
        <code><span class="pln">i </span><span class="pun">=</span> <span class="lit">1</span> <span class="com">#khai báo và gán giá trị cho biến đếm i</span></code>
        
        <code><span class="kwd">while</span><span class="pln"> i </span><span class="pun">&lt;=</span><span class="pln"> n</span><span class="pun">:</span></code>
        <code><span class="pln">    tong </span><span class="pun">=</span><span class="pln"> tong </span><span class="pun">+</span><span class="pln"> i</span></code>
        <code><span class="pln">    i </span><span class="pun">=</span><span class="pln"> i</span><span class="pun">+</span><span class="lit">1</span> <span class="com"># cập nhật biến đếm</span></code>
        
        <code><span class="kwd">print</span><span class="pun">(</span><span class="str">"Tổng là"</span><span class="pun">,</span><span class="pln"> tong</span><span class="pun">)</span></code></pre>
        Với khối lệnh trên ta có, nhập một số tự nhiên n bất kỳ và tính tổng các số từ 1 đến n, sau đó in tổng. Biến lưu trữ tổng là tong, biến đếm là i, cho đến khi i còn nhỏ hơn hoặc bằng n thì vòng lặp vẫn tiếp tục và tong vẫn tăng.
        
        Sau khi chạy lệnh ta có kết quả:
        <div class="codebar"></div>
        <pre id="pre4" class="prettyprint prettyprinted"><code><span class="typ">Nh</span><span class="pun">ậ</span><span class="pln">p n</span><span class="pun">:</span> <span class="lit">11</span></code>
        <code><span class="pln">T</span><span class="pun">ổ</span><span class="pln">ng l</span><span class="pun">à</span> <span class="lit">66</span></code></pre>
        Trong ví dụ trên biến đếm i cần phải được tăng giá trị, điều này là rất quan trọng, nếu không sẽ dẫn đến một vòng lặp vô hạn. Rất nhiều trường hợp lưu ý này đã bị lãng quên.
        
        <strong>Ví dụ 3: Vòng lặp vô hạn</strong>
        
        Lấy lại ví dụ trên, bạn chỉ cần bỏ đi dòng i=i+1
        <div class="codebar"></div>
        <pre id="pre5" class="prettyprint prettyprinted"><code><span class="pln">n </span><span class="pun">=</span> <span class="kwd">int</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">"Nhập n: "</span><span class="pun">))</span> <span class="com">#Nhập số n tùy ý</span></code>
        <code><span class="pln">tong </span><span class="pun">=</span> <span class="lit">0</span> <span class="com">#khai báo và gán giá trị cho tong</span></code>
        <code><span class="pln">i </span><span class="pun">=</span> <span class="lit">1</span> <span class="com">#khai báo và gán giá trị cho biến đếm i</span></code>
        
        <code><span class="kwd">while</span><span class="pln"> i </span><span class="pun">&lt;=</span><span class="pln"> n</span><span class="pun">:</span></code>
        <code><span class="pln">    tong </span><span class="pun">=</span><span class="pln"> tong </span><span class="pun">+</span><span class="pln"> i</span></code>
        
        <code><span class="kwd">print</span><span class="pun">(</span><span class="str">"Tổng là"</span><span class="pun">,</span><span class="pln"> tong</span><span class="pun">)</span> </code></pre>
        Khi này chạy lệnh ta sẽ được:
        <div class="codebar"></div>
        <pre id="pre6" class="prettyprint prettyprinted"><code><span class="typ">Nh</span><span class="pun">ậ</span><span class="pln">p n</span><span class="pun">:</span> <span class="lit">1</span></code>
        <code><span class="typ">Traceback</span> <span class="pun">(</span><span class="pln">most recent call </span><span class="kwd">last</span><span class="pun">):</span></code>
        <code> <span class="typ">File</span> <span class="str">"C:/Users/Quantrimang.com/Programs/Python/Python36-32/QTM.com"</span><span class="pun">,</span><span class="pln"> line </span><span class="lit">6</span><span class="pun">,</span> <span class="kwd">in</span> <span class="str">&lt;module&gt;</span></code>
        <code><span class="pln"> tong </span><span class="pun">=</span><span class="pln"> tong </span><span class="pun">+</span><span class="pln"> i</span></code>
        <code><span class="typ">KeyboardInterrupt</span></code>
        <code><span class="lit">2</span></code>
        <code><span class="lit">3</span></code>
        <code><span class="lit">4</span></code>
        <code><span class="lit">5</span></code></pre>
        <div id="articleads3" class="adbox in-article"></div>
        Khi bạn nhập giá trị 1 vào thì thấy không có lệnh nào được thực hiện tiếp, nhấn Enter &gt; nhập 2 &gt; Enter &gt; nhập 3... đến 5 vẫn không thấy tong được in. Đây là một trường hợp của lệnh vô hạn. Để thoát khỏi vòng lặp vô hạn bạn nhấn phím Ctrl + C, khi đó sẽ xuất hiện dòng thông báo "Traceback..." như bên trên.
        <h2 id="mcetoc_1btdtab282">Kết hợp while với else</h2>
        Giống như vòng lặp for, bạn cũng có thể kết hợp else với while. Trong trường hợp này, khối lệnh của else sẽ được thực hiện khi điều kiện của while là False.
        
        <strong>Ví dụ 4: Minh họa việc sử dụng while kết hợp với else</strong>
        <div class="codebar"></div>
        <pre id="pre7" class="prettyprint prettyprinted"><code><span class="pln">dem </span><span class="pun">=</span> <span class="lit">0</span></code>
        <code><span class="kwd">while</span><span class="pln"> dem </span><span class="pun">&lt;</span> <span class="lit">3</span><span class="pun">:</span></code>
        <code>    <span class="kwd">print</span><span class="pun">(</span><span class="str">"Đang ở trong vòng lặp while"</span><span class="pun">)</span></code>
        <code><span class="pln">    dem </span><span class="pun">=</span><span class="pln"> dem </span><span class="pun">+</span> <span class="lit">1</span></code>
        <code><span class="kwd">else</span><span class="pun">:</span></code>
        <code>    <span class="kwd">print</span><span class="pun">(</span><span class="str">"Đang ở trong else"</span><span class="pun">)</span></code></pre>
        Ở đây ta sử dụng biến dem để in chuỗi "Đang ở trong vòng lặp while" 3 lần. Đến lần lặp thứ 4, điều kiện của while trở thành False, nên phần lệnh của else được thực thi. Kết quả là:
        <div class="codebar"></div>
        <pre id="pre8" class="prettyprint prettyprinted"><code><span class="pun">Đ</span><span class="pln">ang </span><span class="pun">ở</span><span class="pln"> trong v</span><span class="pun">ò</span><span class="pln">ng l</span><span class="pun">ặ</span><span class="pln">p </span><span class="kwd">while</span>
        <span class="pun">Đ</span><span class="pln">ang </span><span class="pun">ở</span><span class="pln"> trong v</span><span class="pun">ò</span><span class="pln">ng l</span><span class="pun">ặ</span><span class="pln">p </span><span class="kwd">while</span>
        <span class="pun">Đ</span><span class="pln">ang </span><span class="pun">ở</span><span class="pln"> trong v</span><span class="pun">ò</span><span class="pln">ng l</span><span class="pun">ặ</span><span class="pln">p </span><span class="kwd">while</span>
        <span class="pun">Đ</span><span class="pln">ang </span><span class="pun">ở</span><span class="pln"> trong </span><span class="kwd">else</span></code></pre>
        <strong>Ví dụ 5: Đếm và in các số nhỏ hơn 2</strong>
        <div class="codebar"></div>
        <pre id="pre9" class="prettyprint prettyprinted"><code><span class="pln">n </span><span class="pun">=</span> <span class="lit">0</span></code>
        <code><span class="kwd">while</span><span class="pln"> n </span><span class="pun">&lt;</span> <span class="lit">2</span><span class="pun">:</span></code>
        <code>    <span class="kwd">print</span><span class="pun">(</span><span class="pln">n</span><span class="pun">,</span><span class="str">"nhỏ hơn 2"</span><span class="pun">)</span></code>
        <code><span class="pln">    n </span><span class="pun">=</span><span class="pln"> n </span><span class="pun">+</span> <span class="lit">1</span></code>
        <code><span class="kwd">else</span><span class="pun">:</span></code>
        <code>   <span class="kwd">print</span> <span class="pun">(</span><span class="pln">n</span><span class="pun">,</span><span class="str">"không nhỏ hơn 2"</span><span class="pun">)</span></code></pre>
        Giá trị ban đầu của n ta gán là 0, tăng dần giá trị của n và in, lặp cho đến khi n không nhỏ hơn 2, nếu n bằng hoặc lớn hơn 2 thì vòng lặp kết thúc và khối lệnh else sẽ được thực thi, kết quả là:
        <div class="codebar"></div>
        <pre id="pre10" class="prettyprint prettyprinted"><code><span class="lit">0</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> nh</span><span class="pun">ỏ</span><span class="pln"> h</span><span class="pun">ơ</span><span class="pln">n </span><span class="lit">2</span></code>
        <code><span class="lit">1</span><span class="pln"> l</span><span class="pun">à</span><span class="pln"> nh</span><span class="pun">ỏ</span><span class="pln"> h</span><span class="pun">ơ</span><span class="pln">n </span><span class="lit">2</span></code>
        <code><span class="lit">2</span><span class="pln"> kh</span><span class="pun">ô</span><span class="pln">ng nh</span><span class="pun">ỏ</span><span class="pln"> h</span><span class="pun">ơ</span><span class="pln">n </span><span class="lit">2</span></code></pre>
        <h2 id="mcetoc_1btdt6hfv1">while trên một dòng</h2>
        Nếu vòng lặp while chỉ có một lệnh duy nhất thì có thể viết trên cùng một dòng với while như ví dụ này:
        
        <strong>Ví dụ 6: Vòng lặp vô hạn với while một dòng lệnh</strong>
        <div class="codebar"></div>
        <pre id="pre11" class="prettyprint notranslate prettyprinted"><code><span class="pln">flag </span><span class="pun">=</span> <span class="lit">1</span>
        <span class="kwd">while</span> <span class="pun">(</span><span class="pln">flag</span><span class="pun">):</span> <span class="kwd">print</span> (<span class="str">'Flag đã cho là True!")
        Print ("Hẹn gặp lại!")</span></code></pre>
        <div class="adbox adsense in-article"></div>
        Đây là một vòng lặp vô hạn, hãy nhớ tổ hợp phím Ctrl + C trước khi bạn nhấn F5 hay Run, nếu không nó sẽ chạy từ ngày này qua ngày khác đấy =)).
        
        Hết rồi, vòng lặp while cũng không phức tạp lắm nhỉ. Trong phần tiếp theo chúng ta sẽ tìm hiểu về lệnh break và continue trong Python, các bạn đón đọc nhé.`,
    },
    
]