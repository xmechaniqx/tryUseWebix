package main

import (
	"log"
	"net/http"
)

func main() {
	runServer()

}

// runServer() - функция запуска сервера
func runServer() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", home)
	log.Println("Запуск веб-сервера на http://127.0.0.1:5000")
	//Определение файлов необходимых для работы сервера
	fileServer := http.FileServer(http.Dir("./ui/"))
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))
	err := http.ListenAndServe(":5000", mux)
	if err != nil {
		log.Fatal(err)
	}
}

// func webHandler(w http.ResponseWriter, r *http.Request) {
// 	//Задаем тип заголовка для отображаемой страницы
// 	w.Header().Add("Content-Type", "application/json")
// 	//Вычленяем логин из адресной строки
// 	//формируем JSON и отправляем на страницу "/chart?login..."
// 	// output, err := json.MarshalIndent(outResponse, "", "\t")
// 	// if err != nil {
// 	// 	fmt.Println("Can't Marshall JSON", output)
// 	// }
// 	// w.Write(output)
// }
