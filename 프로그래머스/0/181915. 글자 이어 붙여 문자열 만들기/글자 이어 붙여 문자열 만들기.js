function solution(my_string, index_list) {
    let res = ""
    index_list.map((str) => {
        res += my_string[str]
    })
    return res
}